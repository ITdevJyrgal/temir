import React from "react";
import Slider from "react-slick";
import temir from "./../../assets/img/temir.png"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SimpleSlider() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (

            <div className="hero">
                <div className="container">
                    <div className="hero-general">
                        <Slider {...settings}>
                            <div className="hero-general-img">
                                <img src={temir} alt="img" className="hero-general-img2" />
                            </div>
                            <div className="hero-general-img">
                                <img src={temir} alt="img" className="hero-general-img2" />
                            </div>
                            <div className="hero-general-img">
                                <img src={temir} alt="img" className="hero-general-img2" />
                            </div>
                        </Slider>
                        <div>
                            <p className="hero-general-dhs">199 dhs</p>
                        </div>
                        <div className="hero-general-gen">
                            <div>
                                <button className="hero-general-btn">BLACK</button>
                                <Box sx={{minWidth: 120}}>
                                    <FormControl fullWidth>

                                        <InputLabel>1</InputLabel>

                                        <Select className="hero-general-select"

                                                labelId="demo-simple-select-label"

                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}>

                                            <MenuItem className="color" value={1}>1</MenuItem>

                                            <MenuItem className="color" value={2}>2</MenuItem>

                                            <MenuItem className="color" value={3}>3</MenuItem>

                                        </Select>

                                    </FormControl>

                                </Box>
                            </div>
                            <div>
                                <button className="hero-general-btn2">SILVER</button>
                                <Box sx={{minWidth: 120}}>
                                    <FormControl className="grt" fullWidth>

                                        <InputLabel>1</InputLabel>

                                        <Select className="hero-general-select"

                                                labelId="demo-simple-select-label"

                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}>

                                            <MenuItem className="color" value={1}>1</MenuItem>

                                            <MenuItem className="color" value={2}>2</MenuItem>

                                            <MenuItem className="color" value={3}>3</MenuItem>

                                        </Select>

                                    </FormControl>

                                </Box>
                            </div>
                            <div>
                                <button className="hero-general-btn3">GOLD</button>
                                <Box sx={{minWidth: 120}}>
                                    <FormControl className="grt" fullWidth>

                                        <InputLabel>1</InputLabel>

                                        <Select className="hero-general-select"

                                                labelId="demo-simple-select-label"

                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}>

                                            <MenuItem className="color" value={1}>1</MenuItem>

                                            <MenuItem className="color" value={2}>2</MenuItem>

                                            <MenuItem className="color" value={3}>3</MenuItem>

                                        </Select>

                                    </FormControl>

                                </Box>
                            </div>
                            <div>
                                <button className="hero-general-btn4">ROSE GOLD</button>
                                <Box sx={{minWidth: 120}}>
                                    <FormControl className="grt" fullWidth>

                                        <InputLabel>1</InputLabel>

                                        <Select className="hero-general-select"

                                                labelId="demo-simple-select-label"

                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}>

                                            <MenuItem className="color" value={1}>1</MenuItem>

                                            <MenuItem className="color" value={2}>2</MenuItem>

                                            <MenuItem className="color" value={3}>3</MenuItem>

                                        </Select>

                                    </FormControl>

                                </Box>
                            </div>

                        </div>
                        <div>
                            <div className="hero-general-gen3">
                                <div className="hero-general-gen2">
                                    <div className="hero-general-block">
                                        <p className="hero-general-total">TOTAL QTY</p>
                                        <label>
                                            <input type="text" placeholder="6 pcs" className="hero-general-input"/>
                                        </label>
                                    </div>
                                    <div className="hero-general-block">
                                        <p className="hero-general-total">TOTAL PRICE</p>
                                        <label>
                                            <input type="text" placeholder="1,194,00 aed"
                                                   className="hero-general-input"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h1 className="hero-general-you">HOW YOU WANT TO PAY?</h1>
                                </div>
                                <div className="hero-general-gen3">
                                    <div className="hero-general-gen2">
                                        <div>
                                            <button className="hero-general-card">CASH ON DELIVERY</button>
                                        </div>
                                        <div>
                                            <button className="hero-general-card">BY CARD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}