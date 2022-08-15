import {  Button, Grid, Stack, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      {/* over all wrapper */}
      <Grid container xs={12} md={12} xl={12}>
        <Grid item xs={12} md={12} xl={12}>
          {/* holder for navbar component */}
          <Navbar />
        </Grid>
        {/* landing page first segment starts form here */}
        <Grid container xs={12} md={12} xl={12} style={{
          backgroundImage: 'linear-gradient(to bottom right,#47cffc,#1318ab)',
          // backgroundPosition:'center',
          // backgroundSize:'contain'
        }}>
          <Grid item md={6} sm={6} style={{
            height: '100vh',
            paddingTop: '13%',
            paddingRight: '8%',
            paddingLeft: '4%'
          }}>
            <p style={{
              marginBottom: '5%',
              color: 'white'
            }}>
              Welcome To OptiRisk
            </p>
            <h2 style={{
              marginBottom: '5%',
              color: 'white'
            }}>
              We are here to simplify your
              <span style={{
                color: '#03ff3d'
              }}>&nbsp;supply chain managament&nbsp;</span>
              & Solutions For Everyone!
            </h2>
            <p style={{
              marginBottom: '5%',
              marginTop: '4%',
              color: 'white'
            }}>
              OPTIRISK aims to help Supply Chain Professionals grow by providing high-quality supply chain on-demand courses, guides, best practices, tools and mentoring from industry experts.
            </p>
            <Button
              variant='outlined'
              color='inherit'
              sx={{
                textTransform: 'capitalize',
                color: '#03ff3d',
                fontSize: '1rem',
                fontFamily: "'Poppins', sans-serif",
                marginTop: '4%'
              }}>Get Started</Button>
          </Grid>
          <Grid item md={6} sm={6} style={{
            paddingTop: '6%'
          }}>
            <img src='./assets/illu.png' alt='user img' width='80%' style={{
              paddingTop: '13%',
              paddingLeft: '5%',
            }} />
          </Grid>
        </Grid>

        <Grid container xs={12} md={12} xl={12} style={{
          height: '100vh',
          backgroundImage: 'linear-gradient(to top right,#47cffc,#1318ab)',

        }}>
          <Grid item xs={12} md={12} xl={12} textAlign='center'>
            <center> <h1 style={{
              color: 'white',
              marginTop: '-5%'
            }}>	&#127881;We are proudly announce our <span style={{
              color: '#03ff3d'
            }}>Products</span>&#127881;</h1></center>
          </Grid>
          {/*wrapper starts*/}
          <Grid container xs={12} md={12} sm={12} style={{

          }}>
            <Grid item md={1} sm={1}>
              {/* 1-space */}
            </Grid>
            <Grid item md={3} sm={3} className='one' style={{
              textAlign: 'center',
              marginTop: '-10%',
              height: '98%',
              background: " rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}>
              <h3 style={{
                color: '#d3e8f0'
              }}>Sales Order Management</h3>
              <img src='./assets/som.png' alt='salesordermanagement' width='22%' />
              <p style={{
                textAlign: 'center',
                color: '#d3e8f0',
                paddingRight: '3%',
                paddingLeft: '3%'
              }}>Move away from Paper based order capture and management. Let IT system and mobility help your team to capture Orders electronically. Avoid delays and errors in manual order processing. Get real-time visibility into order status and sales team productivity.</p>
              <Button
                variant='contained'
                color='btnColor'
                sx={{
                  textTransform: 'capitalize',
                  color: '#03ff3d',
                  fontSize: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                  width: '60%'
                }}>Details</Button>
            </Grid>

            <Grid item md={4} sm={4} style={{
              textAlign: 'center',
              marginTop: '-7%',
              height: '98%',
              marginLeft: '1%',
              marginRight: '1%',
              background: " rgba( 255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}>
              <h3 style={{
                color: '#d3e8f0'
              }}>Delivery Management System</h3>
              <img src='./assets/dom.png' alt='salesordermanagement' width='17%' />
              <p style={{
                textAlign: 'center',
                color: '#d3e8f0',
                paddingRight: '3%',
                paddingLeft: '3%'
              }}>
                Lower operating costs by planning the most efficient schedules and routes. Provide more flexibility to your customers by allowing them to modify orders or ask for additional products at the time of delivery. Reduce errors and improve cash flow by generating receipts and invoices on the spot at customer locations.
              </p>
              <Button
                variant='contained'
                color='btnColor'
                sx={{
                  textTransform: 'capitalize',
                  color: '#03ff3d',
                  fontSize: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                  width: '60%'
                }}>Details</Button>
            </Grid>

            <Grid item md={3} sm={3} style={{
              textAlign: 'center',
              marginTop: '-10%',
              height: '98%',
              background: " rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}>
              <h3 style={{
                color: '#d3e8f0'
              }}>Collection Management System</h3>
              <img src='./assets/com.png' alt='salesordermanagement' width='17%' />
              <p style={{
                textAlign: 'center',
                color: '#d3e8f0',
                paddingTop: '7%',
                paddingRight: '3%',
                paddingLeft: '3%',

              }}>One of the major challenges you face as a business is maintaining cash flow.  Simplify, speed up and automate your payment collection and follow-up process with our cloud and android based integrated collection management system.</p>
              <Button
                variant='contained'
                color='btnColor'
                sx={{
                  textTransform: 'capitalize',
                  color: '#03ff3d',
                  fontSize: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                  width: '60%',
                  marginBottom: '2%'
                }}>Details</Button>
            </Grid>

            <Grid item md={1} sm={1}>
              {/* 1-space */}
            </Grid>
          </Grid>
        </Grid>
        {/* products segment ends */}
        {/* Traininig segment starts */}
        <Grid container xs={12} md={12} xl={12} style={{
          height: '120vh',
          backgroundImage: 'linear-gradient(to top left,#1318ab,#47cffc)',
          paddingTop: '-12%'
        }}>
          <Grid item xs={12} md={12} xl={12} textAlign='center'>
            <center> <h1 style={{
              color: 'white'
            }}>		&#128525;We provide industry <span style={{
              color: '#03ff3d'
            }}>best</span> Trainings&#10069;&#10069;</h1></center>
          </Grid>
          {/*wrapper starts*/}
          <Grid container xs={12} md={12} sm={12}>
            <Grid item md={1} sm={1}>
              {/* 1-space */}
            </Grid>
            <Grid item md={3} sm={3} className='one' style={{
              textAlign: 'center',
              marginTop: '-10%',
              height: '98%',
              background: " rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}>
              <h3 style={{
                color: '#d3e8f0',
                paddingLeft: '2%',
                paddingRight: '2%'
              }}>Mathematical Programming Using OPL CPLEX</h3>
              <img src='./assets/ibm.png' alt='salesordermanagement' width='22%' />
              <p style={{
                textAlign: 'center',
                color: '#d3e8f0',
                paddingRight: '3%',
                paddingLeft: '3%'
              }}>IBM ILOG CPLEX is an advanced robust mathematical solver, used across industries in various business optimization problems. IBM ILOG CPLEX Optimizer’s mathematical programming technology helps in better decision making.</p>
              <Button
                variant='contained'
                color='btnColor'
                sx={{
                  textTransform: 'capitalize',
                  color: '#03ff3d',
                  fontSize: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                  width: '60%'
                }}>Details</Button>
            </Grid>
            <Grid item md={4} sm={4} style={{
              textAlign: 'center',
              marginTop: '-7%',
              height: '98%',
              marginLeft: '1%',
              marginRight: '1%',
              background: " rgba( 255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}>
              <h3 style={{
                color: '#d3e8f0'
              }}>Function Point Analysis</h3>
              <img src='./assets/analysis.png' alt='salesordermanagement' width='17%' />
              <p style={{
                textAlign: 'center',
                color: '#d3e8f0',
                paddingRight: '3%',
                paddingLeft: '3%'
              }}>
                Function Point Analysis (FPA) proposed by IFPUG (International Function Point Users Group) is an industry leading software estimation technique which is also an ISO standard. Learning and following FPA by IFPUG could save you countless late night stays at office,and also could put you on a fast- track to promotion
              </p>
              <Button
                variant='contained'
                color='btnColor'
                sx={{
                  textTransform: 'capitalize',
                  color: '#03ff3d',
                  fontSize: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                  width: '60%'
                }}>Details</Button>
            </Grid>



            <Grid item md={3} sm={3} style={{
              textAlign: 'center',
              marginTop: '-10%',
              height: '98%',
              background: " rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}>
              <h3 style={{
                color: '#d3e8f0',
                paddingLeft: '2%',
                paddingRight: '2%'
              }}>Advanced Optimization using AMPL Workshop</h3>
              <img src='./assets/ampl.png' alt='salesordermanagement' width='17%' />
              <p style={{
                textAlign: 'center',
                color: '#d3e8f0',

                paddingRight: '3%',
                paddingLeft: '3%',

              }}>Optimization technologies have become key tools in making important business decisions that increase competitive advantage. Optimization, through the use of mathematical models and software techniques, is used to assist organisations with solving their complex business problems.</p>
              <Button
                variant='contained'
                color='btnColor'
                sx={{
                  textTransform: 'capitalize',
                  color: '#03ff3d',
                  fontSize: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                  width: '60%',
                  marginBottom: '2%'
                }}>Details</Button>
            </Grid>


            <Grid item md={1} sm={1}>
              {/* 1-space */}
            </Grid>

          </Grid>
        </Grid>


        <Grid container xs={12} md={12} xl={12} style={{
          height: '120vh',
          backgroundImage: 'linear-gradient(to bottom left,#1318ab,#47cffc)',

        }}>
          <Grid item xs={12} md={12} xl={12} textAlign='center'>
            <center> <h1 style={{
              color: 'white'
            }}>		&#9201;Hurray&#10069; time to get a<span style={{
              color: '#03ff3d'
            }}>&nbsp;Demo </span> &#10069;</h1></center>
          </Grid>
          {/*wrapper starts*/}
          <Grid item xs={2} md={2} sm={2}>
            {/* just for spacing */}
          </Grid>
          <Grid item md={8} sm={8} xs={8} style={{
            marginTop: '-2%'
          }}>
            <center>
              <Stack direction='row' spacing={2} sx={{
                marginBottom:'2%'
              }}>

                <TextField

                  label="Name*"
                  variant='outlined'
                  placeholder='enter your name here'
                  fullWidth
                  color='form'

                />
                <TextField
                  label="Email*"
                  variant='outlined'
                  placeholder='enter your name here'
                  fullWidth
                  color='form'
                />
              </Stack>
              <Stack direction='row' spacing={2}  sx={{
                marginBottom:'2%'
              }}>

                <TextField

                  label="Phone*"
                  variant='outlined'
                  placeholder='enter your name here'
                  fullWidth
                  color='form'

                />
                <TextField
                  label="Company*"
                  variant='outlined'
                  placeholder='enter your name here'
                  fullWidth
                  color='form'
                />
              </Stack>
              <Stack spacing={1} direction='column' sx={{
                marginBottom:'2%'
              }}>
                <TextField
                label="Describe your requirement*"
                variant='outlined'
                fullWidth
                color='form'
                
                />
              </Stack>
              <Stack direction='row' spacing={2} sx={{
                marginBottom:'2%'
              }}>

                <TextField

                  label="Industry*"
                  variant='outlined'
                  placeholder='enter your name here'
                  fullWidth
                  color='form'

                />
                <TextField
                  label="Country*"
                  variant='outlined'
                  placeholder='enter your name here'
                  fullWidth
                  color='form'
                />
              </Stack>
              <Button
              variant='contained'
                color='btnColor'
                sx={{
                  textTransform: 'capitalize',
                  color: '#03ff3d',
                  fontSize: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                  width: '60%',
                  marginBottom: '2%'
                }}
               
              >Get a Demo</Button>
            </center>
          </Grid>
          <Grid item xs={2} md={2} sm={2}>
            {/* just for spacing */}
          </Grid>
          <Grid md={12} sm={12}>
              <h1>for footer</h1>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Home