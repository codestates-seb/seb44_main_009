package com.main.MainProject.product.color.controller;

import com.main.MainProject.product.color.dto.ColorDto;
import com.main.MainProject.product.color.entity.Color;
import com.main.MainProject.product.color.mapper.ColorMapper;
import com.main.MainProject.product.color.service.ColorService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/colors")
@Validated
public class ColorController {

    private final ColorService colorService;
    private final ColorMapper mapper;

    public ColorController(ColorService colorService, ColorMapper mapper) {
        this.colorService = colorService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity<?> postColor(@RequestBody @Valid ColorDto.Post requestBody) {
        Color color = mapper.colorPostDtoToColor(requestBody);
        colorService.createColor(color);

        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{color-id}")
    public ResponseEntity<?> patchColor(@PathVariable("color-id") long colorId,
                                        @RequestBody @Valid ColorDto.Patch requestBody) {
        requestBody.setColorId(colorId);
        Color color = mapper.colorPatchDtoToColor(requestBody);
        colorService.updateColor(color);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{color-id}")
    public ResponseEntity<?> deleteColor(@PathVariable("color-id") long colorId) {
        colorService.deleteColor(colorId);

        return ResponseEntity.noContent().build();
    }
}
