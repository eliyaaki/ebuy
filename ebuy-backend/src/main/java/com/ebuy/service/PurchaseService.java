package com.ebuy.service;

import com.ebuy.dao.PurchaseRepository;
import com.ebuy.data.Purchase;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class PurchaseService {
    @Autowired
    private final PurchaseRepository purchaseRepository;

    public void savePurchase(Purchase purchase){
        purchaseRepository.save(purchase);
    }
}
