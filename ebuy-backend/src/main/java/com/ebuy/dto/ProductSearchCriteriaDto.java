package com.ebuy.dto;

import lombok.Data;

@Data
public class ProductSearchCriteriaDto {

    private String author;
    private String title;
    private String keywords;
    private String category;
}
