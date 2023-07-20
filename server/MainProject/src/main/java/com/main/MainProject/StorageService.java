package com.main.MainProject;

import org.springframework.web.multipart.MultipartFile;

public interface StorageService {
    void store(MultipartFile file);

}
