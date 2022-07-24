package com.ebuy.service;

import com.ebuy.dao.CasualCustomerRepository;
import com.ebuy.dao.ClubMemberRepository;
import com.ebuy.dao.CountryRepository;
import com.ebuy.dao.StateRepository;
import com.ebuy.data.Country;
import com.ebuy.data.State;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class RegistrationService {
    @Autowired
    private final ClubMemberRepository clubMemberRepository;
    @Autowired
    private final CasualCustomerRepository casualCustomerRepository;
    @Autowired
    private final CountryRepository countryRepository;
    @Autowired
    private final StateRepository stateRepository;

    public List<Country> getAllCountries(){
        return countryRepository.findAll();
    }
    public List<State> getAllStates(Country country){
        if (country.getName().equals("US")) return stateRepository.findAll();
        return null;
    }
}
