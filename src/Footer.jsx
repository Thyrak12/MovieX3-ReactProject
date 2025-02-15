import 'bootstrap/dist/css/bootstrap.css';

export default function Footer() {
    return (
        <>
            <footer class="bg-dark text-white py-4">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-4">
                            <h5>MovieHub</h5>
                            <p>&copy; 2025 MovieHub. All Rights Reserved.</p>
                        </div>
                        <div class="col-md-4">
                            <h5>Quick Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" class="text-white text-decoration-none">Home</a></li>
                                <li><a href="#" class="text-white text-decoration-none">Movies</a></li>
                                <li><a href="#" class="text-white text-decoration-none">TV Shows</a></li>
                                <li><a href="#" class="text-white text-decoration-none">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5>Follow Us</h5>
                            <a href="#" class="text-white me-2"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="text-white me-2"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="text-white me-2"><i class="bi bi-instagram"></i></a>
                            <a href="#" class="text-white"><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>
                    <hr class="bg-light" />
                    <p class="mb-0">Privacy Policy | Terms of Service</p>
                </div>
            </footer>
        </>
    )
}