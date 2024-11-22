// App.js
import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (response) => {
    try {
      const decodedToken = jwt_decode(response.credential);
      setUser(decodedToken);
      console.log("User Info:", decodedToken);
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  };

  const handleLoginFailure = () => {
    console.log("Login Failed");
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} contextOptions={{ hl: "fa" }}>
      <Container className="text-center mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="mb-4">احراز هویت با</h2>
            <h3 className="mb-4">Google OAuth 2.0</h3>
            {!user ? (
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginFailure}
                width="50%"
                text="continue_with"
              />
            ) : (
              <Card className="mt-4">
                <Card.Header><h2>پروفایل کاربر</h2></Card.Header>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={4}>
                      <Image src={user.picture} roundedCircle fluid />
                    </Col>
                    <Col xs={8}>
                      <p><strong>Name:</strong> {user.name}</p>
                      <p><strong>Email:</strong> {user.email}</p>
                      <p><strong>Google ID:</strong> {user.sub}</p>
                    </Col>
                  </Row>
                  <Button variant="danger" onClick={handleLogout} className="mt-3">
                  خروج از سیستم
                  </Button>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </GoogleOAuthProvider>
  );
}

export default App;
