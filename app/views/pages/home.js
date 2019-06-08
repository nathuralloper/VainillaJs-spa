const Home = {
    render : async () => {
        let view = `
            <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
        
            <!-- Masthead Avatar Image -->
            <img style="width:150px;height:150px;border-radius:150px;" class="masthead-avatar mb-5" src="img/avataaars.svg" alt="">
        
            <!-- Masthead Heading -->
            <h1 class="masthead-heading text-uppercase mb-0">Simple Page Application</h1>
        
            <!-- Icon Divider -->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                <i class="fas fa-star"></i>
                </div>
                <div class="divider-custom-line"></div>
            </div>
        
            <!-- Masthead Subheading -->
            <p class="masthead-subheading font-weight-light mb-0">Using only javascript</p>
        
            </div>
        </header>    
        `;
        return view;
    },
    after_render : async() => {}
};

export default Home;