package com.main.MainProject.product.color.mapper;

import com.main.MainProject.product.color.dto.ColorDto;
import com.main.MainProject.product.color.entity.Color;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ColorMapper {
    Color colorPostDtoToColor(ColorDto.Post post);
    Color colorPatchDtoToColor(ColorDto.Patch patch);
    ColorDto.Response colorToColorResponseDto(Color color);
}
