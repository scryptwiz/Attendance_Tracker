// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Layout Import
import BlankLayout from '../../@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from '../../views/pages/auth/FooterIllustration'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '30rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))


const Signup = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <BlankLayout>
      <Box className='content-center'>
        <Card sx={{ zIndex: 1 }}>
          <CardContent sx={{ pl:6, paddingRight:6, pt:7, pb:7 }}>
            <Typography variant='h4' sx={{ lineHeight: 1, fontWeight: 600, marginBottom: 2, textTransform: 'uppercase' }}>Track as an Administrator 🚀</Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant='body2'>Proceed while comfortably observing user presence!</Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <TextField autoFocus fullWidth id='username' label='Username' sx={{ marginBottom: 4 }} />
              <TextField fullWidth type='email' label='Email' sx={{ marginBottom: 4 }} />
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-register-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='auth-register-password'
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 3, marginTop: 4 }}>
                Sign up
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', marginBottom:3 }}>
                <Typography variant='body2' sx={{ marginRight: 1 }}>
                  Already have an account?
                </Typography>
                <Typography variant='body2'>
                  <Link to='/admin/signin'><LinkStyled>Sign in instead</LinkStyled></Link>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
        <FooterIllustrationsV1/>
      </Box>
    </BlankLayout>
  )
}
export default Signup