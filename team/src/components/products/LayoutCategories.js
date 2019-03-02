import React from 'react';
import { List, ListItem, Paper, Subheader, Divider, FontIcon, Avatar } from "react-md";

export function LayoutCategories(props) {
    const listItems = props.categories.map((item, index) => {
        let items = [];
        items.push(<ListItem onClick={(e) => props.onChange(item)} key={item.id} className={item.id === props.current ? "md-list-tile--active" : ""} primaryText={item.title} leftAvatar={<Avatar icon={<FontIcon>{item.icon}</FontIcon>} />} />);
        if (item.addDivider) {
            items.push(<Divider key={item.id + "_divider"} />);
        }
        return items;
    }).flat();
    return (
        <Paper className="app-layout-categories">
            <List className="app-layout-categories-content">
                <Subheader primaryText="Categories" />
                {listItems}
            </List>
        </Paper>
    );
}