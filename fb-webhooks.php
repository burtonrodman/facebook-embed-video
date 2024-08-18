<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// on post, validate sha256
	// get the
	$data = json_decode(file_get_contents('php://input'), true);
	$video_id = $data["entry"][0]["id"];
	if (is_numeric($video_id)) {
		update_option('video_id', $video_id, true);
	}
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	if ($_GET['hub_mode'] != 'subscribe' ||
		$_GET['hub_verify_token'] != 'meatyhamhock') {
		http_response_code(400);
		exit;
	}
	echo $_GET['hub_challenge'];
} else {
    echo 'Invalid request method.';
	http_response_code(400);
}
