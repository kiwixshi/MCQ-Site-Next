'use client'

import './globals.css'; // Your global styles
import { Provider } from 'react-redux'; // Or any context provider
import { store } from './store'; // Your Redux store, if using Redux


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
