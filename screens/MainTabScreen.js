import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

const COLORS = {
  primary: '#53B175',
  text: '#181725',
  subText: '#7C7C7C',
  border: '#E2E2E2',
  bg: '#FFFFFF',
  inputBg: '#F2F3F2',
  screenBg: '#FCFCFC',
};

const homeBanner = require('../assets/placeholders/banner_grocery.png');
const categories = [
  {
    id: 'c1',
    title: 'Fresh Fruits\n& Vegetable',
    image: require('../assets/placeholders/category_fruits.png'),
    bg: '#EEF7F1',
    border: '#B4E1C3',
  },
  {
    id: 'c2',
    title: 'Cooking Oil\n& Ghee',
    image: require('../assets/placeholders/category_oil.png'),
    bg: '#FFF6EB',
    border: '#F6D1A8',
  },
  {
    id: 'c3',
    title: 'Meat & Fish',
    image: require('../assets/placeholders/category_meat.png'),
    bg: '#FDEEEF',
    border: '#F1C3C8',
  },
  {
    id: 'c4',
    title: 'Bakery & Snacks',
    image: require('../assets/placeholders/category_bakery.png'),
    bg: '#F5EFFA',
    border: '#DCC9F0',
  },
  {
    id: 'c5',
    title: 'Dairy & Eggs',
    image: require('../assets/placeholders/category_dairy.png'),
    bg: '#FFF9E8',
    border: '#F1E0A4',
  },
  {
    id: 'c6',
    title: 'Beverages',
    image: require('../assets/placeholders/category_beverages.png'),
    bg: '#EDF7FD',
    border: '#C7E4F7',
  },
];

const products = {
  exclusive: [
    {
      id: 'p1',
      name: 'Organic Bananas',
      subtitle: '7pcs, Priceg',
      price: 4.99,
      image: require('../assets/placeholders/offer_banana.png'),
      description: 'Fresh bananas placeholder. You can replace this content and image with your own product.',
    },
    {
      id: 'p2',
      name: 'Naturel Red Apple',
      subtitle: '1kg, Priceg',
      price: 4.99,
      image: require('../assets/placeholders/offer_apple.png'),
      description: 'Apples are nutritious. Apples may be good for weight loss, your heart, as part of a healthy diet, and many more.',
    },
  ],
  bestSelling: [
    {
      id: 'p3',
      name: 'Bell Pepper Red',
      subtitle: '1kg, Priceg',
      price: 4.99,
      image: require('../assets/placeholders/best_selling_pepper.png'),
      description: 'Best selling product placeholder text.',
    },
    {
      id: 'p4',
      name: 'Fresh Ginger',
      subtitle: '250gm, Priceg',
      price: 4.99,
      image: require('../assets/placeholders/best_selling_ginger.png'),
      description: 'Best selling product placeholder text.',
    },
  ],
  groceries: [
    {
      id: 'p5',
      name: 'Beef Bone',
      subtitle: '1kg, Priceg',
      price: 4.99,
      image: require('../assets/placeholders/grocery_beef.png'),
      description: 'Grocery placeholder text.',
    },
    {
      id: 'p6',
      name: 'Broiler Chicken',
      subtitle: '1kg, Priceg',
      price: 4.99,
      image: require('../assets/placeholders/grocery_chicken.png'),
      description: 'Grocery placeholder text.',
    },
  ],
};

const beverages = [
  {
    id: 'b1',
    name: 'Diet Coke',
    subtitle: '355ml, Price',
    price: 1.99,
    image: require('../assets/placeholders/bev_diet_coke.png'),
    description: 'Diet Coke placeholder.',
  },
  {
    id: 'b2',
    name: 'Sprite Can',
    subtitle: '325ml, Price',
    price: 1.5,
    image: require('../assets/placeholders/bev_sprite.png'),
    description: 'Sprite placeholder.',
  },
  {
    id: 'b3',
    name: 'Apple & Grape Juice',
    subtitle: '2L, Price',
    price: 15.99,
    image: require('../assets/placeholders/bev_apple_grape.png'),
    description: 'Apple & grape juice placeholder.',
  },
  {
    id: 'b4',
    name: 'Orenge Juice',
    subtitle: '2L, Price',
    price: 15.99,
    image: require('../assets/placeholders/bev_orange_juice.png'),
    description: 'Orange juice placeholder.',
  },
  {
    id: 'b5',
    name: 'Coca Cola Can',
    subtitle: '325ml, Price',
    price: 4.99,
    image: require('../assets/placeholders/bev_coca_cola.png'),
    description: 'Coca cola placeholder.',
  },
  {
    id: 'b6',
    name: 'Pepsi Can',
    subtitle: '330ml, Price',
    price: 4.99,
    image: require('../assets/placeholders/bev_pepsi.png'),
    description: 'Pepsi placeholder.',
  },
];

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

function SearchBar({ placeholder = 'Search Store' }) {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" size={18} color={COLORS.text} />
      <TextInput placeholder={placeholder} placeholderTextColor="#999" style={styles.searchInput} />
    </View>
  );
}

function SectionHeader({ title, onSeeAll }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity onPress={onSeeAll}>
        <Text style={styles.seeAllText}>See all</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.productCard} activeOpacity={0.9} onPress={() => onPress(item)}>
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.productSubtitle}>{item.subtitle}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.priceText}>{formatPrice(item.price)}</Text>
        <TouchableOpacity style={styles.addButton}>
          <AntDesign name="plus" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function HomeScreen({ onOpenProduct, onOpenBeverages }) {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.homeHeaderIconWrap}>
          <Image source={require('../assets/placeholders/logo_carrot.png')} style={styles.carrotIcon} resizeMode="contain" />
        </View>

        <View style={styles.locationRow}>
          <Ionicons name="location-sharp" size={16} color="#4C4F4D" />
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>

        <SearchBar />

        <View style={styles.bannerWrap}>
          <Image source={homeBanner} style={styles.bannerImage} resizeMode="cover" />

        </View>


       <SectionHeader title="Exclusive Offer" onSeeAll={onOpenBeverages} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {products.exclusive.map((item) => (   // ✅ FIX
            <ProductCard key={item.id} item={item} onPress={onOpenProduct} />
          ))}
        </ScrollView>

        <SectionHeader title="Best Selling" onSeeAll={onOpenBeverages} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {products.bestSelling.map((item) => (   // ✅ FIX
            <ProductCard key={item.id} item={item} onPress={onOpenProduct} />
          ))}
        </ScrollView>

        <SectionHeader title="Groceries" onSeeAll={onOpenBeverages} />

        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
          <View style={[styles.smallCategoryCard, { backgroundColor: '#F8EFE4' }]}> 
            <Text style={styles.smallCategoryText}>Pulses</Text>
          </View>
          <View style={[styles.smallCategoryCard, { backgroundColor: '#F0E4D8' }]}> 
            <Text style={styles.smallCategoryText}>Rice</Text>
          </View>
        </ScrollView>

         <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {products.groceries.map((item) => (   // ✅ FIX
            <ProductCard key={item.id} item={item} onPress={onOpenProduct} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
}

function ExploreScreen({ onOpenBeverages }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <Text style={styles.exploreTitle}>Find Products</Text>
        <SearchBar />

        <View style={styles.gridWrap}>
          {categories.map((item) => {
            const isBeverage = item.title === 'Beverages';
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.categoryCard, { backgroundColor: item.bg, borderColor: item.border }]}
                activeOpacity={0.9}
                onPress={isBeverage ? onOpenBeverages : undefined}
              >
                <Image source={item.image} style={styles.categoryImage} resizeMode="contain" />
                <Text style={styles.categoryTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function BeveragesScreen({ onBack, onOpenProduct }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="chevron-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Beverages</Text>
        <TouchableOpacity>
          <Feather name="sliders" size={20} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <View style={styles.beverageGrid}>
          {beverages.map((item) => (
            <ProductCard key={item.id} item={item} onPress={onOpenProduct} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ProductDetailScreen({ product, onBack }) {
  const [qty, setQty] = useState(1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={onBack}>
            <Ionicons name="chevron-back" size={24} color={COLORS.text} />
          </TouchableOpacity>
          <View />
          <TouchableOpacity>
            <Feather name="upload" size={19} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.detailImageBox}>
          <Image source={product.image} style={styles.detailImage} resizeMode="contain" />
          <View style={styles.sliderDots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.detailBody}>
          <View style={styles.detailTitleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.detailName}>{product.name}</Text>
              <Text style={styles.productSubtitle}>{product.subtitle}</Text>
            </View>
            <TouchableOpacity>
              <Feather name="heart" size={22} color="#7C7C7C" />
            </TouchableOpacity>
          </View>

          <View style={styles.qtyPriceRow}>
            <View style={styles.qtyWrap}>
              <TouchableOpacity onPress={() => setQty((v) => Math.max(1, v - 1))}>
                <AntDesign name="minus" size={18} color="#B3B3B3" />
              </TouchableOpacity>
              <View style={styles.qtyBox}>
                <Text style={styles.qtyText}>{qty}</Text>
              </View>
              <TouchableOpacity onPress={() => setQty((v) => v + 1)}>
                <AntDesign name="plus" size={18} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.detailPrice}>{formatPrice(product.price)}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Product Detail</Text>
            <Feather name="chevron-down" size={20} color={COLORS.text} />
          </View>
          <Text style={styles.descriptionText}>{product.description}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Nutritions</Text>
            <View style={styles.nutritionRight}>
              <Text style={styles.nutritionTag}>100gr</Text>
              <Feather name="chevron-right" size={18} color={COLORS.text} />
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Review</Text>
            <View style={styles.nutritionRight}>
              <Text style={styles.stars}>★★★★★</Text>
              <Feather name="chevron-right" size={18} color={COLORS.text} />
            </View>
          </View>

          <TouchableOpacity style={styles.basketButton}>
            <Text style={styles.basketButtonText}>Add To Basket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function BottomTabs({ activeTab, onChange }) {
  const tabs = useMemo(
    () => [
      { key: 'shop', label: 'Shop', icon: 'storefront-outline', iconType: 'Ionicons' },
      { key: 'explore', label: 'Explore', icon: 'search', iconType: 'AntDesign' },
      { key: 'cart', label: 'Cart', icon: 'shopping-cart', iconType: 'Feather' },
      { key: 'favorite', label: 'Favourite', icon: 'heart', iconType: 'AntDesign' },
      { key: 'account', label: 'Account', icon: 'user', iconType: 'Feather' },
    ],
    []
  );

  const renderIcon = (tab, color) => {
    if (tab.iconType === 'AntDesign') return <AntDesign name={tab.icon} size={20} color={color} />;
    if (tab.iconType === 'Feather') return <Feather name={tab.icon} size={19} color={color} />;
    return <Ionicons name={tab.icon} size={20} color={color} />;
  };

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity key={tab.key} style={styles.tabItem} onPress={() => onChange(tab.key)}>
            {renderIcon(tab, isActive ? COLORS.primary : COLORS.text)}
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function MainTabScreen() {
  const [activeTab, setActiveTab] = useState('shop');
  const [route, setRoute] = useState('tabs');
  const [selectedProduct, setSelectedProduct] = useState(products.exclusive[1]);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setRoute('productDetail');
  };

  const openBeverages = () => setRoute('beverages');
  const backToTabs = () => setRoute('tabs');
  let content = null;

  if (route === 'productDetail') {
    content = <ProductDetailScreen product={selectedProduct} onBack={backToTabs} />;
  } else if (route === 'beverages') {
    content = <BeveragesScreen onBack={backToTabs} onOpenProduct={openProduct} />;
  } else if (activeTab === 'shop') {
    content = <HomeScreen onOpenProduct={openProduct} onOpenBeverages={openBeverages} />;
  } else if (activeTab === 'explore') {
    content = <ExploreScreen onOpenBeverages={openBeverages} />;
  } else {
    content = (
      <SafeAreaView style={styles.centerScreen}>
        <Text style={styles.placeholderTitle}>Màn này bạn có thể làm sau</Text>
        <Text style={styles.placeholderText}>Hiện mình đã dựng trước Shop, Explore, Product Detail và Beverages.</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={{ flex: 1 }}>{content}</View>
      {route === 'tabs' && <BottomTabs activeTab={activeTab} onChange={setActiveTab} />}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: COLORS.bg,
     marginTop: 45,

  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  homeHeaderIconWrap: {
    alignItems: 'center',
    
  },
  carrotIcon: {
    width: 40,
    height: 40,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    gap: 4,
    marginTop: 8,
  },
  locationText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4C4F4D',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBg,
    marginHorizontal: 20,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  bannerWrap: {
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
    height: 115,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
  },
  bannerImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  bannerTextBox: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.72)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: COLORS.primary,
    marginTop: 4,
  },
  sliderDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
    marginBottom: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D9D9D9',
  },
  dotActive: {
    width: 16,
    backgroundColor: COLORS.primary,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 22,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
  },
  seeAllText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
  },
  horizontalList: {
    paddingHorizontal: 20,
    gap: 14,
    paddingBottom: 4,
  },
  productCard: {
    width: 174,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 14,
    backgroundColor: COLORS.bg,
  },
  productImage: {
    width: '100%',
    height: 110,
    marginBottom: 14,
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    minHeight: 42,
  },
  productSubtitle: {
    fontSize: 13,
    color: COLORS.subText,
    marginTop: 4,
  },
  priceRow: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },
  addButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryRow: {
    paddingHorizontal: 20,
    gap: 12,
  },
  smallCategoryCard: {
    minWidth: 150,
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  smallCategoryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3E423F',
  },
  exploreTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 18,
    marginBottom: 18,
  },
  gridWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  categoryCard: {
    width: '47.5%',
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 24,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 16,
    minHeight: 185,
  },
  categoryImage: {
    width: 92,
    height: 74,
    marginBottom: 18,
  },
  categoryTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    lineHeight: 24,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
  },
  topBarTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },
  beverageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  detailImageBox: {
    marginHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: '#F2F3F2',
    paddingTop: 18,
    paddingBottom: 10,
    alignItems: 'center',
  },
  detailImage: {
    width: '88%',
    height: 240,
  },
  detailBody: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 24,
  },
  detailTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  detailName: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  qtyPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  qtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  qtyBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 18,
    fontWeight: '600',
  },
  detailPrice: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    paddingVertical: 18,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
  },
  descriptionText: {
    color: COLORS.subText,
    lineHeight: 20,
    marginBottom: 6,
  },
  nutritionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nutritionTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#EBEBEB',
    color: '#7C7C7C',
    fontSize: 12,
    fontWeight: '600',
  },
  stars: {
    color: '#F3603F',
    letterSpacing: 2,
    fontSize: 15,
  },
  basketButton: {
    marginTop: 24,
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },
  basketButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    backgroundColor: '#fff',
  },
  tabItem: {
    alignItems: 'center',
    gap: 6,
  },
  tabLabel: {
    fontSize: 12,
    color: COLORS.text,
  },
  tabLabelActive: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  centerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  placeholderTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color: COLORS.text,
    textAlign: 'center',
  },
  placeholderText: {
    textAlign: 'center',
    color: COLORS.subText,
    lineHeight: 22,
  },
});
