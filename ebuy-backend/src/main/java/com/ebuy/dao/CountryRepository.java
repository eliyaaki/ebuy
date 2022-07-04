package com.ebuy.dao;

import com.ebuy.data.Country;
import com.ebuy.data.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {
}
