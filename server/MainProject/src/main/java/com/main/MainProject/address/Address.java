package com.main.MainProject.address;

import com.main.MainProject.order.entity.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;

    @OneToOne
    @JoinColumn(name = "order_id")
    Order order;

    @Column(length = 20, nullable = false)
    private String receiverName;

    @Column(length = 6, nullable = false)
    private int zipcode;

    @Column(length = 20)
    private String addressName;

    @Column(length = 100, nullable = false)
    private String addressDetails;

    @Column(length = 13, nullable = false)
    private String telNum;

    @Column(length = 100)
    private String request;

    public Address(String receiverName, int zipcode, String addressName, String addressDetails, String telNum, String request) {
        this.receiverName = receiverName;
        this.zipcode = zipcode;
        this.addressName = addressName;
        this.addressDetails = addressDetails;
        this.telNum = telNum;
        this.request = request;
    }
}
