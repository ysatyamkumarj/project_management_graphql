import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import NotFound from './pages/NotFound';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing, incoming) {
                        return incoming;
                    }
                },
                projects: {
                    merge(existing, incoming) {
                        return incoming;
                    }
                }
            }
        }
    }
});

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache
});

const App = () => {
    return (
        <>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Header />
                    <div className='container'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/project/:id' element={<Project />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ApolloProvider>
        </>
    );
};

export default App;