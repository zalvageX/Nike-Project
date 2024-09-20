import { CustomerReviews, PopularProducts, SuperQuality,
  Services, SpecialOffers, Subscribe, Footer, Hero
} from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b bg-[#D8DFE5]">
      <Hero />
    </section>
    <section className="bg-pale-blue padding">
      <PopularProducts />
    </section>
    <section className="padding bg-[#D8DFE5]">
      <SuperQuality />
    </section>
    <section className="padding-x py-10 bg-[#D8DFE5]">
      <Services />
    </section>
    <section className="padding bg-[#D8DFE5]">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App;