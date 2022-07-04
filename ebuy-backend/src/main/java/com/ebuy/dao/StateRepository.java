package com.ebuy.dao;

import com.ebuy.data.Purchase;
import com.ebuy.data.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {
}
