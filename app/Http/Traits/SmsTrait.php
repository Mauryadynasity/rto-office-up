<?php
namespace App\Http\Traits;

use App\Models\Enrollment;
use App\Models\Result;
use App\Models\Semester;

trait SmsTrait {

public function otpSendFun($mobile,$message){

    $mobileNo = $dataSet['mobile'] = $mobile;
    $sms_text = $dataSet['message']  = $message;

    $url = 'https://http.myvfirst.com/smpp/sendsms';
    $userName = 'staqoltdhtptran';
    $password = 'hlq`-\uB9]';
    $senderID = 'STAQOP';

    // Replace special charactor
    $frm = array("#", "$", "&", "*", "<| ", ">| ", "?", "@", "[", "\\", "]", "{", "|", "}", "~", "\n");
    $to = array("&#35;", "&#36;", "&#38;", "&#42;", "&#60;", "&#62;", "&#63;", "&#64;", "&#91;", "&#92;", "&#93;", "&#123;", "&#124;", "&#125;", "&#126;", "&#10;");

    // For English encode the URL
    $sms_text = str_replace($frm, $to, $sms_text);
    $sms_text = str_replace("\"", "&#34;", $sms_text);


    if (isset($dataSet['sha']) && $dataSet['sha']) {
        $frm = array("+", "-");
        $to = array("%2B", "%2D");

        // For English encode the URL
        $sha = str_replace($frm, $to, $dataSet['sha']);
        $sms_text .= $sha;
    }

    //value fisrt start 
    // &#60;&#35;&#62; 

    $postData =  'to=' . $mobileNo . '&from=' . $senderID . '&text=' . $sms_text . '&dlr-mask=19&dlr-url';

    $curllogin = curl_init();

    curl_setopt_array($curllogin, array(
        CURLOPT_URL => "https://http.myvfirst.com/smpp/api/sendsms/token?action=generate",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => $postData,
        CURLOPT_HTTPHEADER => array(
            'Authorization: Basic ' . base64_encode("$userName:$password")
        ),
    ));
    $outputLogin = json_decode(curl_exec($curllogin));
    $errLogin = curl_error($curllogin);
    //dd($outputLogin->token);
    if(!$outputLogin){
        return false;
    }
    curl_close($curllogin);




    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => $url . '?',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => $postData,
        CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer ' . $outputLogin->token
        ),
    ));
    $output = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    return array('output' => $output, 'error' => $err);
}

}

