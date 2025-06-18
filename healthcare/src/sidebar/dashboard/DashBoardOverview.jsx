import React, { useState } from 'react';
import './DashboardOverview.css';
import Image from "/src/sidebar/dashboard/humanbody.jpg"
import { BsLungsFill } from "react-icons/bs";
import { RiToothLine } from "react-icons/ri";
import { TbBone } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { GiLeg } from "react-icons/gi";

const DashboardOverview = () => {
    const [lungsValue, setLungsValue] = useState(60);
    const [teethValue, setTeethValue] = useState(50);
    const [boneValue, setBoneValue] = useState(80);

    const getAccentColor = (value) => {
        if (value > 75) return 'green';
        if (value >= 51 && value <= 75) return 'yellow';
        return 'red';
    };

    return (
        <div className="dashboardoverview">
            <h2 className="sectiontitle">Health Overview</h2>
            <div className="anatomysection">
                <div className="humanbody">
                    <div className='left'>
                        <img src={Image} alt="humanbody" className='bodyimage'/>
                        <h5 className='heart'><FaHeart className='heartimg'/> Healthy Heart</h5>
                        <div>
                            <h5 className='leg'><GiLeg className='legimg'/> Healthy Leg</h5>
                            <span id="spn"></span>
                        </div>
                    </div>
                    <div className='right'>
                        <ul>
                            <li className="bodypart lungs healthy">
                                <BsLungsFill className='lung'/><h4>Lungs</h4> <br />
                                <span>Date: 25 May 2025</span>
                                <input 
                                    type="range" 
                                    value={lungsValue} 
                                    min="0" 
                                    max="100" 
                                    style={{accentColor: getAccentColor(lungsValue)}} 
                                    onChange={(e) => setLungsValue((e.target.value))} 
                                />
                            </li>
                            <li className="bodypart teeth warning">
                                <RiToothLine className='teethy'/><h4>Teeth</h4> <br />
                                <span>Date: 25 May 2025</span>
                                <input 
                                    type="range" 
                                    value={teethValue} 
                                    min="0" 
                                    max="100" 
                                    style={{accentColor: getAccentColor(teethValue)}} 
                                    onChange={(e) => setTeethValue((e.target.value))} 
                                />
                            </li>
                            <li className="bodypart bone critical">
                                <TbBone className='bony'/><h4>Bone</h4> <br />
                                <span>Date: 25 May 2025</span>
                                <input 
                                    type="range" 
                                    value={boneValue} 
                                    min="0" 
                                    max="100" 
                                    style={{accentColor: getAccentColor(boneValue)}} 
                                    onChange={(e) => setBoneValue((e.target.value))} 
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;