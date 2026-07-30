<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function h2h_allowed_origins() {
	return array(
		'http://localhost:3000',
		'http://127.0.0.1:3000',
	);
}

function h2h_send_cors_headers() {
	$origin = isset( $_SERVER['HTTP_ORIGIN'] ) ? $_SERVER['HTTP_ORIGIN'] : '';
	if ( in_array( $origin, h2h_allowed_origins(), true ) ) {
		header( 'Access-Control-Allow-Origin: ' . $origin );
		header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
		header( 'Access-Control-Allow-Headers: Content-Type, Authorization' );
	}
}

add_action( 'send_headers', 'h2h_send_cors_headers' );

add_action( 'graphql_process_http_request', function () {
	h2h_send_cors_headers();
} );

add_filter( 'rest_pre_serve_request', function ( $served ) {
	h2h_send_cors_headers();
	return $served;
} );
