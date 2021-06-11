import React, { useState } from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button } from '@material-ui/core';
import './UserPayment.css';
import PopProfile from '../Profile/PopProfile';
import { profile as Profile } from "../Profile/profile";
import Transaction from '../Transaction/Transcation';
import PopupTranscation from '../Transaction/PopupTranscation'
export default function UserHome() {

    const [openProfile, setOpenProfile] = useState(false);
    const [openTrans, setOpenTrans] = useState(false);
    return (
        <div>
            <Header />
            <div className="user">
                <h3>Glad to know you are donating!</h3>
            </div>
            <div classname="content">
                <div className="content__inside">
                    <div className="amount__card">
                        <div className="amount">
                            <span>Rs 10000.00</span>
                        </div>
                        <div className="transaction">
                            <span onClick={() => setOpenTrans(true)} >View all your Transactions</span>
                        </div>
                    </div>
                    <div className="payment__card">
                        <div className="input">
                            <form>
                                <input type="text" size="12" placeholder="Enter the Amount" />
                                <div className="amount__click">
                                    <span>+100</span>
                                    <span>+500</span>
                                    <span>+1000</span>
                                </div>
                                <Button className="pay">Pay</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <PopupTranscation
                openTrans={openTrans}
                setOpenTrans={setOpenTrans}
            >
                <Transaction />
            </PopupTranscation>
        </div>
    )
}

