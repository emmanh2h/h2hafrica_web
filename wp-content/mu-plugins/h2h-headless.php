<?php
/**
 * Plugin Name: H2H Headless
 * Description: Content model and headless configuration for the Happy2Host EDU Africa site (custom post types, ACF field groups, GraphQL/CORS setup).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'H2H_HEADLESS_DIR', __DIR__ . '/h2h-headless' );

require_once H2H_HEADLESS_DIR . '/post-types.php';
require_once H2H_HEADLESS_DIR . '/taxonomies.php';
require_once H2H_HEADLESS_DIR . '/acf-fields.php';
require_once H2H_HEADLESS_DIR . '/graphql.php';
require_once H2H_HEADLESS_DIR . '/cors.php';
