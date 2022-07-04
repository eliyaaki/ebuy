package com.ebuy.dao;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ebuy.data.Bogo;
@Repository
public interface BogoRepository extends JpaRepository<Bogo, Long> {
}
