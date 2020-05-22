/*
 * Copyright (C) 2018 Matus Zamborsky
 * This file is part of Cyano Wallet.
 *
 * Cyano Wallet is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Cyano Wallet is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Cyano Wallet.  If not, see <http://www.gnu.org/licenses/>.
 */
import * as React from 'react';
import { Button, Message } from 'semantic-ui-react';
import { AccountLogoHeader, Filler, StatusBar, View } from '../../../components';

export interface Props {
  handleCancel: () => void;

  handleClear: () => Promise<void>;
  loading: boolean;
}

export const IdentityClearView: React.SFC<Props> = (props) => (
  <View orientation="column" fluid={true}>
    <View orientation="column" className="part gradient">
      <AccountLogoHeader title="Clear identity" />
      <View content={true} className="spread-around">
        <View>Clearing will erase only your identity from this device. Your account will be not erased.</View>
      </View>
    </View>
    <View orientation="column" fluid={true} content={true} className="spread-around">
      <Message>Make sure you have your private key or mnemonic phrase backed up if you don't want to lose your currently stored data.</Message>
      <Filler />
      <View className="buttons">
        <Button disabled={props.loading} loading={props.loading} onClick={props.handleClear}>Clear</Button>
        <Button disabled={props.loading} onClick={props.handleCancel}>Cancel</Button>
      </View>
    </View>
    <StatusBar />
  </View>
);
