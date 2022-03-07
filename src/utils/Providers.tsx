import React, { FC } from 'react'

import { ThemeProvider } from 'styled-components/native'

import { schema } from '@theme/schema'

export const ProvideTheme: FC = ({ children }) => (
	<ThemeProvider theme={schema.light}>{children}</ThemeProvider>
)

export const Providers: FC = ({ children }) => (
	<ProvideTheme>{children}</ProvideTheme>
)
