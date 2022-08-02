package com.ebuy.dao;

import com.ebuy.data.Bogo;
import com.ebuy.data.ClubMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClubMemberRepository extends JpaRepository<ClubMember, Long> {

    ClubMember findByLoginName(String loginName);
    ClubMember findByLoginNameAndPassWord(String loginName, String passWord);
}
