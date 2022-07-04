package com.ebuy.dao;

import com.ebuy.data.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
//    List<AssetGeneric> findByName(String name);
//    List<AssetGeneric> findByNameContains(String name);
}
