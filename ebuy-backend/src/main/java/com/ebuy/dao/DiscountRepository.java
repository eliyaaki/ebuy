package com.ebuy.dao;

import com.ebuy.data.ClubMember;
import com.ebuy.data.Discount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscountRepository extends JpaRepository<Discount, Long> {

}
