<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', function () {

	register_taxonomy( 'tip_category', array( 'post' ), array(
		'labels'              => array(
			'name'          => 'Tip Categories',
			'singular_name' => 'Tip Category',
		),
		'public'              => true,
		'hierarchical'        => true,
		'show_in_rest'        => true,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'tipCategory',
		'graphql_plural_name' => 'tipCategories',
		'rewrite'             => array( 'slug' => 'tips' ),
	) );

} );
