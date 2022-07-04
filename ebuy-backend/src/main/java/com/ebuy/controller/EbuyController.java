package com.ebuy.controller;

import com.ebuy.dao.ProductRepository;
import com.ebuy.data.Product;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/ebuy")
@Slf4j
public class EbuyController {

    @Autowired
    private ProductRepository dal;

    @GetMapping("getAllProducts")
    @Transactional(readOnly = true)
    public List<Product> getAllProducts(
    ) {
        return dal.findAll();
    }

}
