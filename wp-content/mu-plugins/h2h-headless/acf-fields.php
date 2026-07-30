<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Icon choices map to the lucide-react icon names used in the Figma design,
 * so the frontend can render the matching icon component directly.
 */
function h2h_icon_choices() {
	return array(
		'graduation-cap'          => 'Graduation Cap',
		'laptop'                  => 'Laptop',
		'target'                  => 'Target',
		'university'              => 'University',
		'badge-check'             => 'Badge Check',
		'presentation'            => 'Presentation',
		'user-round-check'        => 'User Round Check',
		'message-circle-more'     => 'Message Circle',
		'square-chart-gantt'      => 'Chart Gantt',
		'laptop-minimal-check'    => 'Laptop Check',
		'sprout'                  => 'Sprout',
		'clock'                   => 'Clock',
		'users'                   => 'Users',
		'shield-check'            => 'Shield Check',
		'calendar'                => 'Calendar',
		'marker'                  => 'Marker',
		'mail'                    => 'Mail',
	);
}

/** A fixed-count "group of N" builder — free ACF has no Repeater, so fixed sections use N named Group fields. */
function h2h_fixed_group_fields( $key_prefix, $name_prefix, $count, $sub_fields, $label_prefix = 'Item' ) {
	$fields = array();
	for ( $i = 1; $i <= $count; $i++ ) {
		$indexed_sub_fields = array();
		foreach ( $sub_fields as $sub_field ) {
			$sub_field['key'] .= '_' . $i;
			$indexed_sub_fields[] = $sub_field;
		}

		$fields[] = array(
			'key'        => $key_prefix . '_' . $i,
			'label'      => $label_prefix . ' ' . $i,
			'name'       => $name_prefix . '_' . $i,
			'type'       => 'group',
			'sub_fields' => $indexed_sub_fields,
		);
	}
	return $fields;
}

function h2h_quote_fields( $key_prefix, $name_prefix ) {
	return array(
		array(
			'key'   => $key_prefix . '_label',
			'label' => 'Label',
			'name'  => $name_prefix . '_label',
			'type'  => 'text',
		),
		array(
			'key'   => $key_prefix . '_rating',
			'label' => 'Rating',
			'name'  => $name_prefix . '_rating',
			'type'  => 'text',
		),
		array(
			'key'   => $key_prefix . '_out_of',
			'label' => 'Out Of',
			'name'  => $name_prefix . '_out_of',
			'type'  => 'text',
		),
		array(
			'key'   => $key_prefix . '_body',
			'label' => 'Body',
			'name'  => $name_prefix . '_body',
			'type'  => 'textarea',
		),
		array(
			'key'   => $key_prefix . '_badge_text',
			'label' => 'Badge Text',
			'name'  => $name_prefix . '_badge_text',
			'type'  => 'text',
		),
	);
}

function h2h_cta_fields( $key_prefix ) {
	return array(
		array(
			'key'   => $key_prefix . '_cta_heading',
			'label' => 'Heading',
			'name'  => 'cta_heading',
			'type'  => 'text',
		),
		array(
			'key'   => $key_prefix . '_cta_body',
			'label' => 'Body',
			'name'  => 'cta_body',
			'type'  => 'textarea',
		),
		array(
			'key'   => $key_prefix . '_cta_button_label',
			'label' => 'Button Label',
			'name'  => 'cta_button_label',
			'type'  => 'text',
		),
	);
}

add_action( 'acf/init', function () {

	/* ------------------------------------------------------------------ */
	/* Home page                                                          */
	/* ------------------------------------------------------------------ */
	acf_add_local_field_group( array(
		'key'      => 'group_home',
		'title'    => 'Home Page Content',
		'show_in_graphql' => true,
		'graphql_field_name' => 'homeFields',
		'graphql_types' => array( 'Page' ),
		'fields'   => array_merge(
			array(
				array( 'key' => 'field_home_hero_heading', 'label' => 'Hero Heading', 'name' => 'hero_heading', 'type' => 'text' ),
				array( 'key' => 'field_home_hero_subtext', 'label' => 'Hero Subtext', 'name' => 'hero_subtext', 'type' => 'textarea' ),
				array( 'key' => 'field_home_hero_image', 'label' => 'Hero Image', 'name' => 'hero_image', 'type' => 'image', 'return_format' => 'url' ),

				array( 'key' => 'field_home_who_badge_1', 'label' => 'Who We Are — Badge 1', 'name' => 'who_badge_1', 'type' => 'text' ),
				array( 'key' => 'field_home_who_badge_2', 'label' => 'Who We Are — Badge 2', 'name' => 'who_badge_2', 'type' => 'text' ),
				array( 'key' => 'field_home_who_badge_3', 'label' => 'Who We Are — Badge 3', 'name' => 'who_badge_3', 'type' => 'text' ),
				array( 'key' => 'field_home_who_heading', 'label' => 'Who We Are — Heading', 'name' => 'who_heading', 'type' => 'text' ),
				array( 'key' => 'field_home_who_body', 'label' => 'Who We Are — Body', 'name' => 'who_body', 'type' => 'textarea', 'rows' => 6 ),
				array( 'key' => 'field_home_who_link_label', 'label' => 'Who We Are — Link Label', 'name' => 'who_link_label', 'type' => 'text' ),

				array( 'key' => 'field_home_what_eyebrow', 'label' => 'What We Do — Eyebrow', 'name' => 'what_eyebrow', 'type' => 'text' ),
				array( 'key' => 'field_home_what_heading', 'label' => 'What We Do — Heading', 'name' => 'what_heading', 'type' => 'text' ),
				array( 'key' => 'field_home_what_link_label', 'label' => 'What We Do — Link Label', 'name' => 'what_link_label', 'type' => 'text' ),

				array( 'key' => 'field_home_why_image', 'label' => 'Why Happy2Host — Background Image', 'name' => 'why_image', 'type' => 'image', 'return_format' => 'url' ),
				array( 'key' => 'field_home_why_eyebrow', 'label' => 'Why Happy2Host — Eyebrow', 'name' => 'why_eyebrow', 'type' => 'text' ),
				array( 'key' => 'field_home_why_heading', 'label' => 'Why Happy2Host — Heading', 'name' => 'why_heading', 'type' => 'text' ),
			),
			h2h_fixed_group_fields( 'field_home_why_reason', 'why_reason', 4, array(
				array( 'key' => 'field_home_why_reason_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => h2h_icon_choices() ),
				array( 'key' => 'field_home_why_reason_text', 'label' => 'Text', 'name' => 'text', 'type' => 'textarea', 'rows' => 2 ),
			), 'Reason' ),
			h2h_quote_fields( 'field_home_why_quote', 'why_quote' ),
			array(
				array( 'key' => 'field_home_upcoming_eyebrow', 'label' => 'Upcoming Training — Eyebrow', 'name' => 'upcoming_eyebrow', 'type' => 'text' ),
				array( 'key' => 'field_home_upcoming_heading', 'label' => 'Upcoming Training — Heading', 'name' => 'upcoming_heading', 'type' => 'text' ),
				array( 'key' => 'field_home_upcoming_link_label', 'label' => 'Upcoming Training — Link Label', 'name' => 'upcoming_link_label', 'type' => 'text' ),

				array( 'key' => 'field_home_words_eyebrow', 'label' => 'In Their Words — Eyebrow', 'name' => 'words_eyebrow', 'type' => 'text' ),
				array( 'key' => 'field_home_words_heading', 'label' => 'In Their Words — Heading', 'name' => 'words_heading', 'type' => 'text' ),

				array( 'key' => 'field_home_tips_eyebrow', 'label' => 'Latest Tips — Eyebrow', 'name' => 'tips_eyebrow', 'type' => 'text' ),
				array( 'key' => 'field_home_tips_heading', 'label' => 'Latest Tips — Heading', 'name' => 'tips_heading', 'type' => 'text' ),
				array( 'key' => 'field_home_tips_link_label', 'label' => 'Latest Tips — Link Label', 'name' => 'tips_link_label', 'type' => 'text' ),
			),
			h2h_cta_fields( 'field_home' )
		),
		'location' => array(
			array(
				array( 'param' => 'page_template', 'operator' => '==', 'value' => 'template-home.php' ),
			),
		),
	) );

	/* ------------------------------------------------------------------ */
	/* About page                                                         */
	/* ------------------------------------------------------------------ */
	acf_add_local_field_group( array(
		'key'      => 'group_about',
		'title'    => 'About Page Content',
		'show_in_graphql' => true,
		'graphql_field_name' => 'aboutFields',
		'graphql_types' => array( 'Page' ),
		'fields'   => array_merge(
			array(
				array( 'key' => 'field_about_hero_image', 'label' => 'Hero Background Image', 'name' => 'hero_image', 'type' => 'image', 'return_format' => 'url' ),
				array( 'key' => 'field_about_hero_eyebrow', 'label' => 'Hero Eyebrow', 'name' => 'hero_eyebrow', 'type' => 'text' ),
				array( 'key' => 'field_about_hero_heading', 'label' => 'Hero Heading', 'name' => 'hero_heading', 'type' => 'text' ),
				array( 'key' => 'field_about_hero_subtext', 'label' => 'Hero Subtext', 'name' => 'hero_subtext', 'type' => 'textarea' ),

				array( 'key' => 'field_about_story_eyebrow', 'label' => 'Our Story — Eyebrow', 'name' => 'story_eyebrow', 'type' => 'text' ),
				array( 'key' => 'field_about_story_heading', 'label' => 'Our Story — Heading', 'name' => 'story_heading', 'type' => 'text' ),
				array( 'key' => 'field_about_story_body', 'label' => 'Our Story — Body', 'name' => 'story_body', 'type' => 'textarea', 'rows' => 8 ),
				array( 'key' => 'field_about_story_image', 'label' => 'Our Story — Image', 'name' => 'story_image', 'type' => 'image', 'return_format' => 'url' ),

				array( 'key' => 'field_about_record_eyebrow', 'label' => 'Record — Eyebrow', 'name' => 'record_eyebrow', 'type' => 'text' ),
				array( 'key' => 'field_about_record_intro', 'label' => 'Record — Intro', 'name' => 'record_intro', 'type' => 'textarea' ),
			),
			h2h_fixed_group_fields( 'field_about_record_stat', 'record_stat', 4, array(
				array( 'key' => 'field_about_record_stat_number', 'label' => 'Number', 'name' => 'number', 'type' => 'text' ),
				array( 'key' => 'field_about_record_stat_label', 'label' => 'Label', 'name' => 'label', 'type' => 'textarea', 'rows' => 2 ),
			), 'Stat' ),
			array(
				array( 'key' => 'field_about_record_note', 'label' => 'Record — Note', 'name' => 'record_note', 'type' => 'text' ),

				array( 'key' => 'field_about_homecoming_eyebrow', 'label' => 'Homecoming — Eyebrow', 'name' => 'homecoming_eyebrow', 'type' => 'text' ),
				array( 'key' => 'field_about_homecoming_heading', 'label' => 'Homecoming — Heading', 'name' => 'homecoming_heading', 'type' => 'text' ),
				array( 'key' => 'field_about_homecoming_body', 'label' => 'Homecoming — Body', 'name' => 'homecoming_body', 'type' => 'textarea', 'rows' => 8 ),
			),
			h2h_quote_fields( 'field_about_quote', 'quote' ),
			array(
				array( 'key' => 'field_about_how_image', 'label' => 'How We Work — Background Image', 'name' => 'how_image', 'type' => 'image', 'return_format' => 'url' ),
				array( 'key' => 'field_about_how_heading', 'label' => 'How We Work — Heading', 'name' => 'how_heading', 'type' => 'text' ),
				array( 'key' => 'field_about_how_subtext', 'label' => 'How We Work — Subtext', 'name' => 'how_subtext', 'type' => 'textarea' ),
			),
			h2h_fixed_group_fields( 'field_about_how_step', 'how_step', 4, array(
				array( 'key' => 'field_about_how_step_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => h2h_icon_choices() ),
				array( 'key' => 'field_about_how_step_title', 'label' => 'Title', 'name' => 'title', 'type' => 'text' ),
				array( 'key' => 'field_about_how_step_body', 'label' => 'Body', 'name' => 'body', 'type' => 'textarea', 'rows' => 3 ),
			), 'Step' ),
			array(
				array( 'key' => 'field_about_stand_heading', 'label' => 'What We Stand For — Heading', 'name' => 'stand_heading', 'type' => 'text' ),
			),
			h2h_fixed_group_fields( 'field_about_stand_item', 'stand_item', 4, array(
				array( 'key' => 'field_about_stand_item_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => h2h_icon_choices() ),
				array( 'key' => 'field_about_stand_item_title', 'label' => 'Title', 'name' => 'title', 'type' => 'text' ),
				array( 'key' => 'field_about_stand_item_body', 'label' => 'Body', 'name' => 'body', 'type' => 'textarea', 'rows' => 3 ),
			), 'Value' ),
			h2h_cta_fields( 'field_about' )
		),
		'location' => array(
			array(
				array( 'param' => 'page_template', 'operator' => '==', 'value' => 'template-about.php' ),
			),
		),
	) );

	/* ------------------------------------------------------------------ */
	/* Services page                                                      */
	/* ------------------------------------------------------------------ */
	acf_add_local_field_group( array(
		'key'      => 'group_services',
		'title'    => 'Services Page Content',
		'show_in_graphql' => true,
		'graphql_field_name' => 'servicesFields',
		'graphql_types' => array( 'Page' ),
		'fields'   => array_merge(
			array(
				array( 'key' => 'field_services_hero_image', 'label' => 'Hero Background Image', 'name' => 'hero_image', 'type' => 'image', 'return_format' => 'url' ),
				array( 'key' => 'field_services_hero_eyebrow', 'label' => 'Hero Eyebrow', 'name' => 'hero_eyebrow', 'type' => 'text' ),
				array( 'key' => 'field_services_hero_heading', 'label' => 'Hero Heading', 'name' => 'hero_heading', 'type' => 'text' ),
				array( 'key' => 'field_services_hero_subtext', 'label' => 'Hero Subtext', 'name' => 'hero_subtext', 'type' => 'textarea' ),
			),
			h2h_cta_fields( 'field_services' )
		),
		'location' => array(
			array(
				array( 'param' => 'page_template', 'operator' => '==', 'value' => 'template-services.php' ),
			),
		),
	) );

	/* ------------------------------------------------------------------ */
	/* Training Event CPT                                                 */
	/* ------------------------------------------------------------------ */
	acf_add_local_field_group( array(
		'key'      => 'group_training_event',
		'title'    => 'Training Event Details',
		'show_in_graphql' => true,
		'graphql_field_name' => 'eventDetails',
		'fields'   => array(
			array( 'key' => 'field_event_date', 'label' => 'Date (for sorting)', 'name' => 'event_date', 'type' => 'date_picker', 'display_format' => 'jS F', 'return_format' => 'Ymd', 'show_in_graphql' => false ),
			array( 'key' => 'field_event_date_display', 'label' => 'Date (display text)', 'name' => 'event_date_display', 'type' => 'text', 'instructions' => 'e.g. "18th February" — shown on the site.' ),
			array( 'key' => 'field_event_start_time', 'label' => 'Start Time', 'name' => 'start_time', 'type' => 'time_picker', 'display_format' => 'H:i', 'return_format' => 'H:i' ),
			array( 'key' => 'field_event_end_time', 'label' => 'End Time', 'name' => 'end_time', 'type' => 'time_picker', 'display_format' => 'H:i', 'return_format' => 'H:i' ),
			array(
				'key'     => 'field_event_mode',
				'label'   => 'Mode',
				'name'    => 'mode',
				'type'    => 'select',
				'choices' => array( 'in_person' => 'In Person', 'online' => 'Online' ),
			),
			array( 'key' => 'field_event_venue', 'label' => 'Venue', 'name' => 'venue', 'type' => 'text', 'instructions' => 'e.g. "Lagos", "Live" for online events' ),
		),
		'location' => array(
			array(
				array( 'param' => 'post_type', 'operator' => '==', 'value' => 'training_event' ),
			),
		),
	) );

	/* ------------------------------------------------------------------ */
	/* Testimonial CPT                                                    */
	/* ------------------------------------------------------------------ */
	acf_add_local_field_group( array(
		'key'      => 'group_testimonial',
		'title'    => 'Testimonial Details',
		'show_in_graphql' => true,
		'graphql_field_name' => 'testimonialDetails',
		'fields'   => array(
			array( 'key' => 'field_testimonial_quote', 'label' => 'Quote', 'name' => 'quote', 'type' => 'textarea', 'rows' => 4 ),
			array( 'key' => 'field_testimonial_role', 'label' => 'Role & Location', 'name' => 'author_role', 'type' => 'text', 'instructions' => 'e.g. "Science teacher, Lagos"' ),
			array( 'key' => 'field_testimonial_featured', 'label' => 'Featured on Home', 'name' => 'featured', 'type' => 'true_false', 'ui' => 1 ),
		),
		'location' => array(
			array(
				array( 'param' => 'post_type', 'operator' => '==', 'value' => 'testimonial' ),
			),
		),
	) );

	/* ------------------------------------------------------------------ */
	/* Service CPT                                                        */
	/* ------------------------------------------------------------------ */
	acf_add_local_field_group( array(
		'key'      => 'group_service',
		'title'    => 'Service Details',
		'show_in_graphql' => true,
		'graphql_field_name' => 'serviceDetails',
		'fields'   => array(
			array( 'key' => 'field_service_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => h2h_icon_choices() ),
			array( 'key' => 'field_service_summary', 'label' => 'Summary (card subheading)', 'name' => 'summary', 'type' => 'text' ),
			array( 'key' => 'field_service_intro', 'label' => 'Intro (services page paragraph)', 'name' => 'intro', 'type' => 'textarea', 'rows' => 3 ),
			array(
				'key'          => 'field_service_features',
				'label'        => 'Features',
				'name'         => 'features',
				'type'         => 'textarea',
				'instructions' => 'One feature per line.',
				'rows'         => 5,
			),
		),
		'location' => array(
			array(
				array( 'param' => 'post_type', 'operator' => '==', 'value' => 'service' ),
			),
		),
	) );

} );
