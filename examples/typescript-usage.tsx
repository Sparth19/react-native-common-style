import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { common } from "react-native-common-style";

interface CardProps {
  title: string;
  description: string;
  backgroundColor?: keyof typeof common;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  backgroundColor = "bgWhite",
}) => {
  return (
    <View
      style={[
        common.p15,
        common.bgWhite,
        common.br10,
        common.shadow1,
        common.mb10,
      ]}
    >
      <Text
        style={[{ fontSize: common.medium }, common.fontWeightBold, common.mb5]}
      >
        {title}
      </Text>
      <Text style={[{ fontSize: common.small }, common.fontWeightNormal]}>
        {description}
      </Text>
    </View>
  );
};

const TypeScriptUsageExample: React.FC = () => {
  return (
    <ScrollView style={common.flex1}>
      {/* Header */}
      <View style={[common.p20, common.bgWhite, common.shadow2]}>
        <Text
          style={[
            { fontSize: common.large },
            common.fontWeightBold,
            common.textCenter,
            common.mb10,
          ]}
        >
          TypeScript Example
        </Text>
        <Text style={[{ fontSize: common.medium }, common.textCenter]}>
          Using React Native Common Style with TypeScript
        </Text>
      </View>

      {/* Content */}
      <View style={[common.p20]}>
        {/* Cards using the Card component */}
        <Card
          title="Spacing Utilities"
          description="Use m1-m25 for margins, p1-p25 for padding, and g1-g25 for gaps."
        />

        <Card
          title="Typography System"
          description="Use fontSize.small to fontSize.extra_large for responsive text sizing."
        />

        <Card
          title="Flexbox Layouts"
          description="Use flexRow, flexColumn, centerRow, spaceBetweenRow for common layout patterns."
        />

        <Card
          title="Border System"
          description="Use br1-br25 for border radius and borderWidth1-3 for border widths."
        />

        {/* Layout demonstration */}
        <View
          style={[
            common.p15,
            common.bgWhite,
            common.br10,
            common.shadow1,
            common.mb15,
          ]}
        >
          <Text
            style={[
              { fontSize: common.medium },
              common.fontWeight500,
              common.mb10,
            ]}
          >
            Layout Combinations
          </Text>

          {/* Row layout */}
          <View style={[common.spaceBetweenRow, common.mb10]}>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgSuccess,
                common.br5,
                common.centerColumn,
              ]}
            >
              <Text style={[{ fontSize: common.tiny }, common.textCenter]}>
                Success
              </Text>
            </View>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgError,
                common.br5,
                common.centerColumn,
              ]}
            >
              <Text style={[{ fontSize: common.tiny }, common.textCenter]}>
                Error
              </Text>
            </View>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgInfo,
                common.br5,
                common.centerColumn,
              ]}
            >
              <Text style={[{ fontSize: common.tiny }, common.textCenter]}>
                Info
              </Text>
            </View>
          </View>

          {/* Column layout */}
          <View style={[common.centerColumn, common.g10]}>
            <View
              style={[
                common.w100,
                common.h10,
                common.bgBlack,
                common.br5,
                common.centerColumn,
              ]}
            >
              <Text style={[{ fontSize: common.tiny }, common.textCenter]}>
                Full Width
              </Text>
            </View>
            <View
              style={[
                common.w100,
                common.h10,
                common.bgWhite,
                common.br5,
                common.borderWidth1,
                common.centerColumn,
              ]}
            >
              <Text style={[{ fontSize: common.tiny }, common.textCenter]}>
                With Border
              </Text>
            </View>
          </View>
        </View>

        {/* Responsive text demonstration */}
        <View
          style={[
            common.p15,
            common.bgWhite,
            common.br10,
            common.shadow1,
            common.mb15,
          ]}
        >
          <Text
            style={[
              { fontSize: common.medium },
              common.fontWeight500,
              common.mb10,
            ]}
          >
            Responsive Typography
          </Text>
          <Text style={[{ fontSize: common.tiny }, common.mb5]}>Tiny: 8px</Text>
          <Text style={[{ fontSize: common.small }, common.mb5]}>
            Small: 12px
          </Text>
          <Text style={[{ fontSize: common.medium }, common.mb5]}>
            Medium: 16px
          </Text>
          <Text style={[{ fontSize: common.large }, common.mb5]}>
            Large: 24px
          </Text>
          <Text style={[{ fontSize: common.extra_large }]}>
            Extra Large: 48px
          </Text>
        </View>

        {/* Shadow demonstration */}
        <View
          style={[
            common.p15,
            common.bgWhite,
            common.br10,
            common.shadow1,
            common.mb15,
          ]}
        >
          <Text
            style={[
              { fontSize: common.medium },
              common.fontWeight500,
              common.mb10,
            ]}
          >
            Shadow Effects
          </Text>
          <View style={[common.flexRow, common.g10, common.flexWrap]}>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br5,
                common.shadow1,
                common.centerColumn,
              ]}
            >
              <Text style={[{ fontSize: common.very_tiny }]}>1</Text>
            </View>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br5,
                common.shadow2,
                common.centerColumn,
              ]}
            >
              <Text style={[{ fontSize: common.very_tiny }]}>2</Text>
            </View>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br5,
                common.shadow3,
                common.centerColumn,
              ]}
            >
              <Text style={[{ fontSize: common.very_tiny }]}>3</Text>
            </View>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br5,
                common.shadow4,
                common.centerColumn,
              ]}
            >
              <Text style={[{ fontSize: common.very_tiny }]}>4</Text>
            </View>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br5,
                common.shadow5,
                common.centerColumn,
              ]}
            >
              <Text style={[{ fontSize: common.very_tiny }]}>5</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TypeScriptUsageExample;
