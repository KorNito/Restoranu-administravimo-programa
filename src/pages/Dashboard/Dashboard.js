import React, { Component } from 'react';

import Header from '../../components/HeaderComponent/header';
import WelcomeText from '../../components/WelcomeComponent/WelcomeText'
import RestaurantList from '../../components/RestaurantListComponent/restaurantList'
import Dishes from '../../components/DishesComponent/dishes'
import DiscountApplicator from '../../components/DiscountApplicatorComponent/discountApplicator'
import Footer from '../../components/FooterComponent/footer'

import './Dashboard.css'

export class Dashboard extends Component {
    render() {
        return (
            <div class="DashboardClass">
                <Header class='HeaderClass' />
                <WelcomeText class='WelcomeText'/>
                <RestaurantList class='RestaurantListClass'/>
                <Dishes class='DishesClass'/>
                <DiscountApplicator class='DiscountApplicatorClass'/>
                <Footer class='FooterClass'/> 
            </div>
        )
    }
}

export default Dashboard
