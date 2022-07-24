package com.ebuy.controller;

import com.ebuy.dao.ProductRepository;
import com.ebuy.data.*;
import com.ebuy.dto.ProductSearchCriteriaDto;
import com.ebuy.service.ProductsService;
import com.ebuy.service.PurchaseService;
import com.ebuy.service.RegistrationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//import io.swagger.annotations.ApiOperation;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController()
//@ApiOperation(value = "ebuy", tags = "ebuy")
@RequestMapping("/ebuy")
@Slf4j
public class EbuyController {

    @Autowired
    private ProductRepository dal;
    @Autowired
    private RegistrationService registrationService;
    @Autowired
    private PurchaseService purchaseService;
    @Autowired
    private ProductsService productsService;


    @GetMapping("getAllCountries")
    @Transactional(readOnly = true)
    public List<Country> getAllCountries(
    ) {
        return registrationService.getAllCountries();
    }

    @GetMapping("getAllStates")
    @Transactional(readOnly = true)
    public List<State> getAllStates(
            @RequestParam(required = true) Country country
    ) {
        return registrationService.getAllStates(country);
    }

    @GetMapping("getShipmentOption")
    @Transactional(readOnly = true)
//    @ApiOperation("Get all registered assets")
    public List<String> getShipmentOption(
    ) {
        List<String> shipmentOption = Stream.of(ShipmentOption.values())
                .map(Enum::name)
                .collect(Collectors.toList());
        return shipmentOption;
    }

    @GetMapping("getCreditCardType")
    @Transactional(readOnly = true)
    public List<String> getCreditCardType(
    ) {
        List<String> creditCardType = Stream.of(CreditCardType.values())
                .map(Enum::name)
                .collect(Collectors.toList());
        return creditCardType;
    }


    @GetMapping("getAllProducts")
    @Transactional(readOnly = true)
    public List<Product> getAllProducts(
    ) {
        return dal.findAll();
    }


    @GetMapping("getBooksByFilterts")
    @Transactional(readOnly = true)
    public List<Product> getBooksByFilters(
            @RequestParam(required = true) ProductSearchCriteriaDto productSearchCriteria
    ) {
        return productsService.findProductsWithFilters(productSearchCriteria);
    }

}
