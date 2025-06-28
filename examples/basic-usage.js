import React from "react";
import { View, Text, ScrollView } from "react-native";
import { common } from "react-native-common-style";

const BasicUsageExample = () => {
  return (
    <ScrollView style={common.flex1}>
      {/* Header with spacing and typography */}
      <View style={[common.p20, common.bgWhite, common.shadow1]}>
        <Text
          style={[
            { fontSize: common.large },
            common.fontWeightBold,
            common.textCenter,
            common.mb10,
          ]}
        >
          React Native Common Style
        </Text>
        <Text style={[common.medium, common.textCenter]}>
          A comprehensive styling utility library
        </Text>
      </View>

      {/* Content sections with different layouts */}
      <View style={[common.p20]}>
        {/* Flexbox example */}
        <View
          style={[
            common.spaceBetweenRow,
            common.p15,
            common.bgWhite,
            common.br10,
            common.shadow1,
            common.mb15,
          ]}
        >
          <Text style={[common.medium_extra, common.fontWeight500]}>
            Flexbox Layout
          </Text>
          <View style={[common.bgInfo, common.ph10, common.pv5, common.br5]}>
            <Text style={[common.small_medium, common.textCenter]}>Button</Text>
          </View>
        </View>

        {/* Spacing example */}
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
            Spacing Utilities
          </Text>
          <View style={[common.flexRow, common.g10]}>
            <View style={[common.h10, common.bgError, common.br5]} />
            <View style={[common.h15, common.bgSuccess, common.br5]} />
            <View style={[common.h20, common.bgInfo, common.br5]} />
          </View>
        </View>

        {/* Typography example */}
        <View
          style={[
            common.p15,
            common.bgWhite,
            common.br10,
            common.shadow1,
            common.mb15,
          ]}
        >
          <Text style={[common.medium, common.fontWeight500, common.mb10]}>
            Typography
          </Text>
          <Text style={[common.small, common.mb5]}>Small text (12px)</Text>
          <Text style={[common.medium, common.mb5]}>Regular text (16px)</Text>
          <Text
            style={[common.medium_extra, common.fontWeightBold, common.mb5]}
          >
            Large bold text (18px)
          </Text>
          <Text style={[common.large, common.fontWeightBold]}>
            Heading (24px)
          </Text>
        </View>

        {/* Border example */}
        <View
          style={[
            common.p15,
            common.bgWhite,
            common.br10,
            common.shadow1,
            common.mb15,
          ]}
        >
          <Text style={[common.medium, common.fontWeight500, common.mb10]}>
            Borders
          </Text>
          <View style={[common.flexRow, common.g10, common.flexWrap]}>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br5,
                common.borderWidth1,
              ]}
            />
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br10,
                common.borderWidth2,
              ]}
            />
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br15,
                common.borderWidth3,
              ]}
            />
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br20,
                common.borderWidth1,
              ]}
            />
          </View>
        </View>

        {/* UI utilities example */}
        <View
          style={[
            common.p15,
            common.bgWhite,
            common.br10,
            common.shadow1,
            common.mb15,
          ]}
        >
          <Text style={[common.medium, common.fontWeight500, common.mb10]}>
            UI Utilities
          </Text>
          <View style={[common.flexRow, common.g10, common.flexWrap]}>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br10,
                common.shadow1,
                common.centerColumn,
              ]}
            >
              <Text style={common.small}>Shadow 1</Text>
            </View>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br10,
                common.shadow2,
                common.centerColumn,
              ]}
            >
              <Text style={common.small}>Shadow 2</Text>
            </View>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgWhite,
                common.br10,
                common.shadow3,
                common.centerColumn,
              ]}
            >
              <Text style={common.small}>Shadow 3</Text>
            </View>
          </View>
        </View>

        {/* Background colors example */}
        <View
          style={[
            common.p15,
            common.bgWhite,
            common.br10,
            common.shadow1,
            common.mb15,
          ]}
        >
          <Text style={[common.medium, common.fontWeight500, common.mb10]}>
            Background Colors
          </Text>
          <View style={[common.flexRow, common.g10, common.flexWrap]}>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgSuccess,
                common.br5,
                common.centerColumn,
              ]}
            >
              <Text style={[common.tiny, common.textCenter]}>Success</Text>
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
              <Text style={[common.tiny, common.textCenter]}>Error</Text>
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
              <Text style={[common.tiny, common.textCenter]}>Info</Text>
            </View>
            <View
              style={[
                common.w10,
                common.h10,
                common.bgBlack,
                common.br5,
                common.centerColumn,
              ]}
            >
              <Text style={[common.tiny, common.textCenter]}>Black</Text>
            </View>
          </View>
        </View>

        {/* Layout combinations example */}
        <View
          style={[
            common.p15,
            common.bgWhite,
            common.br10,
            common.shadow1,
            common.mb15,
          ]}
        >
          <Text style={[common.medium, common.fontWeight500, common.mb10]}>
            Layout Combinations
          </Text>
          <View style={[common.g10]}>
            <View
              style={[common.centerRow, common.h10, common.bgInfo, common.br5]}
            >
              <Text style={common.small}>Center Row</Text>
            </View>
            <View
              style={[
                common.spaceBetweenRow,
                common.h10,
                common.bgSuccess,
                common.br5,
                common.ph10,
              ]}
            >
              <Text style={common.small}>Left</Text>
              <Text style={common.small}>Right</Text>
            </View>
            <View
              style={[
                common.centerColumn,
                common.h15,
                common.bgError,
                common.br5,
              ]}
            >
              <Text style={common.small}>Center Column</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BasicUsageExample;
