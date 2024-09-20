import Container from "@/app/_components/container";
import {Intro} from "@/app/_components/intro";
import HomeScreen from "@/app/home-screen";

export default async function Index() {

    return (
        <main>
            <Container>
                <Intro/>
                <HomeScreen/>
            </Container>
        </main>
    );
}
