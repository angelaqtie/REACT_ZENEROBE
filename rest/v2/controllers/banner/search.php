<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../models/banner/Banner.php';

// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$banner = new Banner($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload(($data));

    $banner->banner_search = $data['searchValue'];

    http_response_code(200);
    if ($data['isFilter']) {
        $banner->banner_is_active = checkIndex($data, 'statusFilter');
        if ($banner->banner_search != '') {
            $query = checkFilterActiveSearch($banner);
            getQueriedData($query);
        }
        $query = checkFilterActive($banner);
        getQueriedData($query);
    }

    $query = checkSearch($banner);
    getQueriedData(($query));

    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
