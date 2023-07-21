package com.main.MainProject.s3upload;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Optional;

@Service
@Component
@Slf4j
public class S3Uploader {
    private final AmazonS3Client amazonS3Client;

    public S3Uploader(AmazonS3Client amazonS3Client) {
        this.amazonS3Client = amazonS3Client;
    }
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public String upload(MultipartFile multipartFile, String dirName, long code) throws IOException {

        String objectKey = dirName + "-" + code;

        InputStream inputStream = multipartFile.getInputStream();

        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(multipartFile.getSize());
        metadata.setContentType(multipartFile.getContentType());

        String response = upload(inputStream, objectKey, metadata);
        return response;
    }

    private String upload(InputStream inputStream,String objectKey, ObjectMetadata metadata) {
        PutObjectRequest putObjectRequest = new PutObjectRequest(bucket, objectKey, inputStream, metadata);
        amazonS3Client.putObject(putObjectRequest.withCannedAcl(CannedAccessControlList.PublicRead));

        return amazonS3Client.getUrl(bucket, objectKey).toString();    // 업로드된 파일의 S3 URL 주소 반환
    }
}
