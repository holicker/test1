package com.spreadmat.auth.service;

import com.spreadmat.auth.domain.CustomUserDetails;
import com.spreadmat.auth.domain.User;
import com.spreadmat.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }

        CustomUserDetails loginUser = new CustomUserDetails();
        loginUser.setUsername(user.getUsername());
        loginUser.setPassword(user.getPassword());
        loginUser.setEnabled(true);
        loginUser.setAccountNonExpired(true);
        loginUser.setAccountNonLocked(true);
        loginUser.setCredentialsNonExpired(true);

        return loginUser;


    }

}

