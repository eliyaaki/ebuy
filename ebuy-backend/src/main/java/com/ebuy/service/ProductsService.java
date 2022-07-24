package com.ebuy.service;

import com.ebuy.dao.ProductCriteriaRepository;
import com.ebuy.dao.ProductRepository;
import com.ebuy.data.Product;
import com.ebuy.dto.ProductSearchCriteriaDto;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductsService {
    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final ProductCriteriaRepository productCriteriaRepository;


    public List<Product> findProductsWithFilters(ProductSearchCriteriaDto productSearchCriteria){
        return productCriteriaRepository.findAllWithFilters(productSearchCriteria);
    }
}
