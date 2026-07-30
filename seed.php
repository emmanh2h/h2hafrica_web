<?php
/**
 * One-off content seed matching the Figma copy. Run via:
 *   wp eval-file seed.php --allow-root
 * Safe to re-run — pages/posts are looked up by title before creating.
 */

function h2h_seed_page( $title, $slug, $template, $fields ) {
	$existing = get_page_by_path( $slug );
	if ( $existing ) {
		$post_id = $existing->ID;
	} else {
		$post_id = wp_insert_post( array(
			'post_title'  => $title,
			'post_name'   => $slug,
			'post_type'   => 'page',
			'post_status' => 'publish',
		) );
	}
	update_post_meta( $post_id, '_wp_page_template', $template );
	foreach ( $fields as $key => $value ) {
		update_field( $key, $value, $post_id );
	}
	echo "Page: {$title} (#{$post_id})\n";
	return $post_id;
}

function h2h_seed_cpt( $post_type, $title, $fields, $extra = array() ) {
	$existing = get_page_by_title( $title, OBJECT, $post_type );
	if ( $existing ) {
		$post_id = $existing->ID;
	} else {
		$post_id = wp_insert_post( array_merge( array(
			'post_title'  => $title,
			'post_type'   => $post_type,
			'post_status' => 'publish',
		), $extra ) );
	}
	foreach ( $fields as $key => $value ) {
		update_field( $key, $value, $post_id );
	}
	echo ucfirst( $post_type ) . ": {$title} (#{$post_id})\n";
	return $post_id;
}

/* ==================================================================== */
/* Home                                                                  */
/* ==================================================================== */
$home_id = h2h_seed_page( 'Home', 'home', 'template-home.php', array(
	'hero_heading'   => 'Helping schools across Africa unlock the full potential of Google Workspace for Education.',
	'hero_subtext'   => 'We support schools, colleges and universities, and the educators inside them. We help you get the most out of Google Workspace for Education and Gemini, so it makes a real difference to teaching and learning.',

	'who_badge_1'    => '15+ years in education',
	'who_badge_2'    => 'Cyber Essentials certified',
	'who_badge_3'    => 'Hosts of the Lagos Summit',
	'who_heading'    => 'Your Google for Education partner.',
	'who_body'       => "Our story started in the classroom. Happy2Host EDU Africa was founded by Lawrence Tijjani, a former teacher and part of the Nigerian diaspora. He wants teachers everywhere to get the best out of technology, and now AI. The team are current and former educators, so we know what happens after the trainer leaves.\n\nWe are building across Africa one country at a time, at a pace that lets us do it properly. In June 2026 we hosted the first Lagos Summit featuring Google for Education. For many teachers in the room, it was the first training of its kind they had had.",
	'who_link_label' => 'More about us',

	'what_eyebrow'    => 'WHAT WE DO',
	'what_heading'    => "Let's go with how we support schools, colleges, and universities.",
	'what_link_label' => 'All services',

	'why_eyebrow'         => 'WHY HAPPY2HOST',
	'why_heading'         => 'Why schools choose us',
	'why_reason_1'        => array( 'icon' => 'university', 'text' => 'Deep roots in education. Fifteen years and counting, always classroom-first.' ),
	'why_reason_2'        => array( 'icon' => 'badge-check', 'text' => 'Google for Education partner. Six years accredited, and it shows in the work.' ),
	'why_reason_3'        => array( 'icon' => 'presentation', 'text' => 'Hosts of the Lagos Summit. The first of its kind featuring Google for Education.' ),
	'why_reason_4'        => array( 'icon' => 'user-round-check', 'text' => 'Teachers, start to finish. Built by people who have marked the books and run the room.' ),
	'why_quote_label'     => 'TRAINING THAT LANDS',
	'why_quote_rating'    => '4.84',
	'why_quote_out_of'    => 'out of 5',
	'why_quote_body'      => 'Average rating from the teachers we trained at the Lagos summit.',
	'why_quote_badge_text' => "100% said they'd attend another Happy2Host event",

	'upcoming_eyebrow'    => 'UPCOMING TRAINING',
	'upcoming_heading'    => 'Come and learn with us',
	'upcoming_link_label' => 'See all training',

	'words_eyebrow' => 'IN THEIR WORDS',
	'words_heading' => 'What people say after training with us',

	'tips_eyebrow'    => 'LATEST TIPS',
	'tips_heading'    => 'One practical tip a week',
	'tips_link_label' => 'Browse all tips',

	'cta_heading'      => "Let's work out what's right for your school.",
	'cta_body'         => 'A friendly, no-pressure conversation. We listen first, then tell you honestly what we would do.',
	'cta_button_label' => 'Book your free consultation',
) );
update_option( 'show_on_front', 'page' );
update_option( 'page_on_front', $home_id );

/* ==================================================================== */
/* About                                                                 */
/* ==================================================================== */
h2h_seed_page( 'About', 'about', 'template-about.php', array(
	'hero_eyebrow' => 'ABOUT US',
	'hero_heading' => 'Empowering teachers. Preparing students. Supporting leaders.',
	'hero_subtext' => 'Helping schools get the most from technology and AI.',

	'story_eyebrow' => 'Our story',
	'story_heading' => 'It started with a simple creative idea.',
	'story_body'    => "Happy2Host has been running for over 22 years. It began with two 17-year-olds in college, building websites for local businesses. Twenty-two years on, the idea hasn't changed: technology, used well, helps people achieve their goals. The company found its true mission in the classroom. Our founder, Lawrence Tijjani, spent over 15 years in education as a teacher and senior leader before an epileptic attack forced him to leave the career he loved. He built Happy2Host Education to continue the work another way: supporting educators and students to find real value in technology.",

	'record_eyebrow'  => 'The record so far',
	'record_intro'    => 'Our work is built on proven impact and long-term partnership across the UK, Bermuda and Nigeria.',
	'record_stat_1'   => array( 'number' => '100+', 'label' => 'Schools, colleges and trusts supported' ),
	'record_stat_2'   => array( 'number' => '10,000+', 'label' => 'Educators trained to date' ),
	'record_stat_3'   => array( 'number' => '6 years', 'label' => 'As a trusted Google for Education partner' ),
	'record_stat_4'   => array( 'number' => '5 years', 'label' => "Managing Google's training theatre, welcoming over 30,000 visitors" ),
	'record_note'     => 'Google for Education Trainer Leadership Award 2026 • Cyber Essentials certified',

	'homecoming_eyebrow' => 'The homecoming',
	'homecoming_heading' => 'Why Africa. Why now.',
	'homecoming_body'    => "For Lawrence, a member of the Nigerian diaspora, expanding to Africa is a homecoming. The demand was undeniable. When registration opened for the first Lagos Summit featuring Google for Education in June 2026, nearly 1,000 educators applied for 120 seats. We had to turn educators away, and that didn't sit right with Lawrence. Happy2Host Africa was born from that moment. Our aim is to support teachers and educational institutions to get the most out of technology, including AI, and to build capacity that stays: local trainers and local partners who strengthen their own communities.",

	'quote_label'      => 'Where it began',
	'quote_rating'     => '4.84',
	'quote_out_of'     => 'out of 5',
	'quote_body'       => 'Average rating from the teachers we trained at the Lagos summit.',
	'quote_badge_text' => "100% said they'd attend another Happy2Host event",

	'how_heading' => 'How we work',
	'how_subtext' => 'Success with technology is about people, not just tools. Every partnership runs the same way.',
	'how_step_1'  => array( 'icon' => 'message-circle-more', 'title' => 'We listen', 'body' => "We start with your goals, your budget realities and your staff's actual starting point." ),
	'how_step_2'  => array( 'icon' => 'square-chart-gantt', 'title' => 'We plan with you', 'body' => 'A clear roadmap that fits your timetable, term calendar and improvement priorities.' ),
	'how_step_3'  => array( 'icon' => 'laptop-minimal-check', 'title' => 'We train, hands-on', 'body' => 'Staff work on their own materials during sessions and apply new skills immediately, with minimal disruption to teaching.' ),
	'how_step_4'  => array( 'icon' => 'sprout', 'title' => 'We grow with you', 'body' => "We stay alongside you, build your team's confidence and skills, and review the impact together as the partnership develops." ),

	'stand_heading' => 'What we stand for',
	'stand_item_1'  => array( 'icon' => 'graduation-cap', 'title' => 'Pedagogy first, technology second', 'body' => 'Teaching and learning lead. Every tool has to earn its place in the classroom, and our training is designed by former teachers who know the difference.' ),
	'stand_item_2'  => array( 'icon' => 'clock', 'title' => 'Sustainability', 'body' => 'We build skills, local trainers and systems that keep working long after a project ends.' ),
	'stand_item_3'  => array( 'icon' => 'users', 'title' => 'Collaboration', 'body' => 'We work alongside your staff and local partners, building long-term relationships that get the best outcomes for your institution.' ),
	'stand_item_4'  => array( 'icon' => 'shield-check', 'title' => 'Integrity', 'body' => "Independent, honest advice in your institution's best interest. Clear about what will make a difference and what won't." ),

	'cta_heading'      => "Let's talk about your school.",
	'cta_body'         => 'A friendly, no-pressure conversation. We listen first, then give you an honest assessment of how we can help.',
	'cta_button_label' => 'Book your free consultation',
) );

/* ==================================================================== */
/* Services                                                              */
/* ==================================================================== */
h2h_seed_page( 'Services', 'services', 'template-services.php', array(
	'hero_eyebrow' => 'OUR SERVICES',
	'hero_heading' => 'Your Google Workspace for Education and Gemini experts.',
	'hero_subtext' => 'Get the most out of Google Workspace for Education and Gemini. We help across three areas: hands-on training, technical setup and support, and bespoke digital strategy.',

	'cta_heading'      => "Not sure where to start? That's what the consultation is for.",
	'cta_body'         => "We'll tell you what we would do, and what we wouldn't.",
	'cta_button_label' => 'Book your free consultation',
) );

/* ==================================================================== */
/* Services (CPT)                                                        */
/* ==================================================================== */
h2h_seed_cpt( 'service', 'Training & Enablement', array(
	'icon'     => 'graduation-cap',
	'summary'  => 'Confident staff, from first login to daily habit.',
	'intro'    => "Our training is run by people who have taught full classes themselves. It's practical, patient, and something your staff can use in their next lesson.",
	'features' => "Google Certified Educator\nGemini Certification\nCustom professional development",
), array( 'menu_order' => 1 ) );

h2h_seed_cpt( 'service', 'Technical & IT', array(
	'icon'     => 'laptop',
	'summary'  => 'Set up properly, and supported when you need it.',
	'intro'    => 'The technical side, done once and done right. We set Workspace up the way Google intends, check your security, and stay on hand when something needs fixing.',
	'features' => "Google Workspace deployment\nSecurity audit & Cyber Essentials\nGoogle Workspace support",
), array( 'menu_order' => 2 ) );

h2h_seed_cpt( 'service', 'Consultancy & Strategy', array(
	'icon'     => 'target',
	'summary'  => 'Independent advice, and a plan you can actually follow.',
	'intro'    => 'Strategy is getting everyone on the same page. We help you set a clear plan and shared goals, so your school uses the technology it already has well, and adds new tools only when they will make a real difference.',
	'features' => "Your digital strategy, reviewed honestly\nA roll-out plan that fits your institution",
), array( 'menu_order' => 3 ) );

/* ==================================================================== */
/* Training Events (CPT)                                                 */
/* ==================================================================== */
h2h_seed_cpt( 'training_event', 'Google Certified Educator day', array(
	'event_date' => '20260218',
	'event_date_display' => '18th February',
	'start_time' => '09:30:00',
	'end_time'   => '15:00:00',
	'mode'       => 'in_person',
	'venue'      => 'Lagos',
), array( 'post_excerpt' => 'A full day to get your staff confident and certified.' ) );

h2h_seed_cpt( 'training_event', 'Gemini for lesson planning', array(
	'event_date' => '20260304',
	'event_date_display' => '4th March',
	'start_time' => '16:00:00',
	'end_time'   => '17:30:00',
	'mode'       => 'online',
	'venue'      => 'Live',
), array( 'post_excerpt' => 'Practical AI you can use in class the next day.' ) );

h2h_seed_cpt( 'training_event', 'Workspace admin essentials', array(
	'event_date' => '20260320',
	'event_date_display' => '20th March',
	'start_time' => '10:00:00',
	'end_time'   => '13:00:00',
	'mode'       => 'in_person',
	'venue'      => 'Abuja',
), array( 'post_excerpt' => 'For IT leads setting up their institution properly.' ) );

/* ==================================================================== */
/* Testimonials (CPT)                                                    */
/* ==================================================================== */
h2h_seed_cpt( 'testimonial', 'Adaeze Okafor', array(
	'quote'       => 'I came in nervous about Gemini and left using it to plan that evening\'s lessons. Practical, and never preachy.',
	'author_role' => 'Science teacher, Lagos',
	'featured'    => 1,
) );

h2h_seed_cpt( 'testimonial', 'Ibrahim Bello', array(
	'quote'       => 'They explained Workspace so the whole staff room understood it. No jargon, just what to do on Monday.',
	'author_role' => 'ICT lead, Abuja',
	'featured'    => 1,
) );

h2h_seed_cpt( 'testimonial', 'Funmi Adeyemi', array(
	'quote'       => 'Patient, and clearly on our side. It felt like training from people who have taught a full class themselves.',
	'author_role' => 'Deputy head, Ibadan',
	'featured'    => 1,
) );

/* ==================================================================== */
/* Tips (native posts + tip_category taxonomy)                           */
/* ==================================================================== */
$workspace_term = term_exists( 'Workspace', 'tip_category' );
if ( ! $workspace_term ) {
	$workspace_term = wp_insert_term( 'Workspace', 'tip_category' );
}
$gemini_term = term_exists( 'Gemini · AI', 'tip_category' );
if ( ! $gemini_term ) {
	$gemini_term = wp_insert_term( 'Gemini · AI', 'tip_category' );
}

$tip1 = get_page_by_title( 'Five things to do before you break up for the holidays.', OBJECT, 'post' );
if ( ! $tip1 ) {
	$tip1_id = wp_insert_post( array(
		'post_title'   => 'Five things to do before you break up for the holidays.',
		'post_excerpt' => 'Twenty minutes of tidying in Classroom, Drive and Gmail now, and you come back to a clean start instead of a backlog.',
		'post_content' => 'Twenty minutes of tidying in Classroom, Drive and Gmail now, and you come back to a clean start instead of a backlog.',
		'post_type'    => 'post',
		'post_status'  => 'publish',
	) );
	wp_set_object_terms( $tip1_id, 'Workspace', 'tip_category' );
	echo "Tip: Five things to do before you break up for the holidays. (#{$tip1_id})\n";
}

$tip2 = get_page_by_title( 'Three Gemini prompts that save a teacher an hour a week.', OBJECT, 'post' );
if ( ! $tip2 ) {
	$tip2_id = wp_insert_post( array(
		'post_title'   => 'Three Gemini prompts that save a teacher an hour a week.',
		'post_excerpt' => 'Differentiate a worksheet, draft a parent email, and build a quick quiz, with prompts you can copy and adjust.',
		'post_content' => 'Differentiate a worksheet, draft a parent email, and build a quick quiz, with prompts you can copy and adjust.',
		'post_type'    => 'post',
		'post_status'  => 'publish',
	) );
	wp_set_object_terms( $tip2_id, 'Gemini · AI', 'tip_category' );
	echo "Tip: Three Gemini prompts that save a teacher an hour a week. (#{$tip2_id})\n";
}

echo "Seed complete.\n";
