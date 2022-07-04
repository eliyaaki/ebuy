package com.ebuy.service;

import com.ebuy.dao.CasualCustomerRepository;
import com.ebuy.dao.ClubMemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class RegistrationService {
    @Autowired
    private final ClubMemberRepository clubMemberRepository;
    @Autowired
    private final CasualCustomerRepository casualCustomerRepository;

}
