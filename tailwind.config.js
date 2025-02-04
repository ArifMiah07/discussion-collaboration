module.exports = {
    content: ["./src/**/*.{html,js}"],
    safelist: ["text-test-color"], // 
    theme: {
      extend: {
        colors: {
          'test-color': "#fff",
          bgc: "#ff0000",
          primary: "#3498db", // blue shade
          secondary: "#2ecc71", // green shade
          accent: "#f39c12", // orange shade
        }
      },
    },
    plugins: [],
  };
  