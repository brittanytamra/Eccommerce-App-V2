export default function Profile() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const user = JSON.parse(localStorage.getItem('user'));
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      window.location.href = "/";
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Profile
            </Typography>
              <div>
              <IconButton onClick={handleMenu} color="inherit">
                <Avatar src={user.avatar} />
              </IconButton>
              <Menu id="menu-appbar" 
                anchorEl={anchorEl} 
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Avatar src={user.avatar} className={classes.large} />
            <Typography variant="h5">
            Welcome {user.fname} {user.lname}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }