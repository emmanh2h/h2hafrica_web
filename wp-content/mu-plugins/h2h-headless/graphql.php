<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Wrap raw WP_Post objects so WPGraphQL field resolvers (title, ACF groups, etc.) can read them. */
function h2h_wrap_posts_as_models( array $posts ) {
	return array_map( function ( $post ) {
		return new \WPGraphQL\Model\Post( $post );
	}, $posts );
}

/** Latest 3 published training events, soonest first. */
add_action( 'graphql_register_types', function () {
	register_graphql_field( 'RootQuery', 'upcomingTrainingEvents', array(
		'type'        => array( 'list_of' => 'TrainingEvent' ),
		'description' => 'The next upcoming training events, ordered by event date.',
		'args'        => array(
			'first' => array( 'type' => 'Int' ),
		),
		'resolve'     => function ( $root, $args ) {
			$query = new WP_Query( array(
				'post_type'      => 'training_event',
				'posts_per_page' => $args['first'] ?? 3,
				'post_status'    => 'publish',
				'meta_key'       => 'event_date',
				'orderby'        => 'meta_value',
				'order'          => 'ASC',
			) );
			return h2h_wrap_posts_as_models( $query->posts );
		},
	) );

	register_graphql_field( 'RootQuery', 'featuredTestimonials', array(
		'type'        => array( 'list_of' => 'Testimonial' ),
		'description' => 'Testimonials flagged as featured, for homepage display.',
		'args'        => array(
			'first' => array( 'type' => 'Int' ),
		),
		'resolve'     => function ( $root, $args ) {
			$query = new WP_Query( array(
				'post_type'      => 'testimonial',
				'posts_per_page' => $args['first'] ?? 3,
				'post_status'    => 'publish',
				'meta_key'       => 'featured',
				'meta_value'     => '1',
			) );
			return h2h_wrap_posts_as_models( $query->posts );
		},
	) );
} );
