<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', function () {

	register_post_type( 'training_event', array(
		'labels'              => array(
			'name'          => 'Training Events',
			'singular_name' => 'Training Event',
			'add_new_item'  => 'Add New Training Event',
			'edit_item'     => 'Edit Training Event',
		),
		'public'              => true,
		'has_archive'         => true,
		'show_in_rest'        => true,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'trainingEvent',
		'graphql_plural_name' => 'trainingEvents',
		'menu_icon'           => 'dashicons-calendar-alt',
		'supports'            => array( 'title', 'editor', 'excerpt', 'thumbnail' ),
		'rewrite'             => array( 'slug' => 'training' ),
	) );

	register_post_type( 'testimonial', array(
		'labels'              => array(
			'name'          => 'Testimonials',
			'singular_name' => 'Testimonial',
			'add_new_item'  => 'Add New Testimonial',
			'edit_item'     => 'Edit Testimonial',
		),
		'public'              => true,
		'has_archive'         => false,
		'show_in_rest'        => true,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'testimonial',
		'graphql_plural_name' => 'testimonials',
		'menu_icon'           => 'dashicons-format-quote',
		'supports'            => array( 'title' ),
	) );

	register_post_type( 'service', array(
		'labels'              => array(
			'name'          => 'Services',
			'singular_name' => 'Service',
			'add_new_item'  => 'Add New Service',
			'edit_item'     => 'Edit Service',
		),
		'public'              => true,
		'has_archive'         => false,
		'show_in_rest'        => true,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'service',
		'graphql_plural_name' => 'services',
		'menu_icon'           => 'dashicons-welcome-learn-more',
		'supports'            => array( 'title', 'editor', 'thumbnail', 'page-attributes' ),
	) );

} );
