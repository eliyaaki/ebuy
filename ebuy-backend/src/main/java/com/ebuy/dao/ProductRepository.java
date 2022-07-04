package com.ebuy.dao;

import com.ebuy.data.Product;
import com.ebuy.data.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    //List<AssetGeneric> findByName(String name);
    List<Product> findByAuthorContains(String name);
    List<Product> findByTitleContains(String name);
    List<Product> findByKeyWordsContains(String name);
    List<Product> findByCategory(String name);
}
