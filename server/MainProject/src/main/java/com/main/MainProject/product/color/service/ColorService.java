package com.main.MainProject.product.color.service;

import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.product.color.entity.Color;
import com.main.MainProject.product.color.repository.ColorRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ColorService {

    private final ColorRepository colorRepository;

    public ColorService(ColorRepository colorRepository) {
        this.colorRepository = colorRepository;
    }

    public Color createColor(Color color) {
        verifyExistColor(color.getColorId());
        return colorRepository.save(color);
    }

    public Color updateColor(Color color) {
        Color verifiedColor = findVerifiedColor(color.getColorId());
        Optional.ofNullable(color.getName())
                .ifPresent(verifiedColor::setName);

        return colorRepository.save(verifiedColor);
    }

    public void deleteColor(long colorId) {
        Color verifiedColor = findVerifiedColor(colorId);
        colorRepository.delete(verifiedColor);
    }

    public void verifyExistColor(long colorId) {
        Optional<Color> optionalColor = colorRepository.findById(colorId);
        if (optionalColor.isPresent())
            throw new BusinessLogicException(ExceptionCode.COLOR_EXIST);
    }

    public Color findVerifiedColor(long colorId) {
        Optional<Color> optionalColor = colorRepository.findById(colorId);
        return optionalColor.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COLOR_NOT_FOUND));
    }

    public Color findColorByName(String name) {
        Optional<Color> optionalColor = colorRepository.findByName(name);
        return optionalColor.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COLOR_NOT_FOUND));
    }
}
