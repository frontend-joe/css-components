* {
  box-sizing: border-box;
}

@keyframes rotate {
  100% {
    background-position: 15% 50%;
  }
}

:root {
  --color-primary: #7656f0;
}

body {
  display: grid;
  place-items: center;
  margin: 0;
  height: 100vh;
  padding: 0 24px;
  background-color: var(--color-primary);
  background-image: url("background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Euclid Circular A";
  color: #f9f9f9;
  animation: rotate 6s infinite alternate linear;
}

body::after {
  content: "";
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 35%);
}

.login-card {
  position: relative;
  z-index: 3;
  width: 100%;
  margin: 0 20px;
  padding: 70px 30px 44px;
  border-radius: 20px;
  background: rgb(24 21 36 / 66%);
  backdrop-filter: blur(10px);
  text-align: center;
}

@media (width >= 448px) {
  .login-card {
    margin: 0;
    width: 70%;
    min-width: 400px;
  }
}

@media (width >= 500px) {
  body {
    padding: 0;
  }
}

@media (width >= 628px) {
  .login-card {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 44px;
    width: 50%;
    max-width: 500px;
    min-width: auto;
    display: flex;
    border-radius: 0;
    flex-direction: column;
    justify-content: center;
  }
}

.login-card > h2 {
  font-size: 36px;
  font-weight: 400;
  margin: 0 0 12px;
}

.login-card > h3 {
  color: rgb(255 255 255 / 38%);
  margin: 0 0 48px;
  font-weight: 400;
  font-size: 16px;
}

.login-form {
  width: 100%;
  margin: 0;
  display: grid;
  gap: 16px;
}

.login-form > :is(input, button) {
  width: 100%;
  height: 56px;
  border-radius: 6px;
  border: 0;
}

.login-form > input {
  color: rgb(255 255 255 / 96%);
  background: rgb(255 255 255 / 8%);
  font-family: inherit;
  font-size: 16px;
  padding: 0 16px;
}

.login-form > input:focus {
  outline: var(--color-primary);
}

.login-form > input::placeholder {
  color: rgb(255 255 255 / 38%);
}

.login-form > button {
  cursor: pointer;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: var(--color-primary);
  color: #f9f9f9;
  border: 0;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  transition: all 0.375s;
}

.login-form > a {
  color: var(--color-primary);
  font-size: 16px;
  text-align: left;
  text-decoration: none;
  margin-bottom: 30px;
}
