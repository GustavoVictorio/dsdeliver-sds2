package com.gustavo.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gustavo.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
